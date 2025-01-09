using Newtonsoft.Json;
using System.Net;
using EPiServer.ServiceLocation;
using System.Security;
using System.Xml;
using EPiServer.Logging;
using FEO.CMS.HBG.Models;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Pages;
using FEO.CMS.HBG.Helper;

namespace FEO.CMS.HBG.Business.Forms
{
    public class InsidersRepository
    {
        private static readonly EPiServer.Logging.ILogger logger = LogManager.GetLogger(typeof(InsidersRepository));
        private static IContentLoader contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
        public static GoogleCaptchaResponse ValidateCaptcha(string response)
        {
            var GetAppSetting = ServiceLocator.Current.GetInstance<IConfiguration>();
            string secret = GetAppSetting["RecaptchaKey:SecretKey"];
            var client = new WebClient();
            var jsonResult = client.DownloadString(string.Format("https://www.google.com/recaptcha/api/siteverify?secret={0}&response={1}", secret, response));

            return JsonConvert.DeserializeObject<GoogleCaptchaResponse>(jsonResult.ToString());
        }
        public static PersonalInfoSection ReadRecordSSOValidateUser(string email, string Password)
        {
            var rootPageReference = ContentReference.StartPage;
            var sitePageReference = contentLoader.Get<PageData>(rootPageReference).ParentLink;
            var site = contentLoader.Get<HBGSite>(sitePageReference);
            var insidersConfig = CreateInsiderConfig(site);

            var ps = new PersonalInfoSection();

            logger.Information("Insiders Repo:ReadRecordSSOValidateUser email = " + email ?? string.Empty);

            HttpWebRequest request = CreateWebRequest();
            XmlDocument soapEnvelopeXml = new XmlDocument();
            soapEnvelopeXml.LoadXml(@"
          <soap:Envelope xmlns:soap=""http://www.w3.org/2003/05/soap-envelope"" xmlns:xsi=""http://www.w3.org/2001/XMLSchema-instance"" xmlns:xsd=""http://www.w3.org/2001/XMLSchema"">
   <soap:Header>
      <HTNGHeader xmlns=""http://htng.org/1.1/Header/"">
         <From>
         <Credential>
          <userName>APIUsername</userName>
          <password>APIPassword</password>
        </Credential>
         </From>
        </HTNGHeader>
   </soap:Header>
   <soap:Body>
      <OTA_ReadRQ EchoToken=""ECHOTOKEN-1"" Version=""1"" PrimaryLangID=""en""  xmlns=""http://www.opentravel.org/OTA/2003/05"">
         <ReadRequests>
            <ProfileReadRequest>
            <UniqueID Type=""1"" ID=""UserEmail"" PinNumber=""loginPassword"" ID_Context=""crs"">
                  <CompanyName CodeContext=""chain"" Code=""24327"" />
               </UniqueID>
            </ProfileReadRequest>
         </ReadRequests>
      </OTA_ReadRQ>
   </soap:Body>
</soap:Envelope>
            ");
            soapEnvelopeXml.LoadXml(soapEnvelopeXml.InnerXml.Replace("UserEmail", email));
            soapEnvelopeXml.LoadXml(soapEnvelopeXml.InnerXml.Replace("loginPassword", SecurityElement.Escape(Password)));

            if (!string.IsNullOrEmpty(insidersConfig.ProfileManagerAPIUsername) || !string.IsNullOrEmpty(insidersConfig.ProfileManagerAPIPassword))
            {
                soapEnvelopeXml.LoadXml(soapEnvelopeXml.InnerXml.Replace("APIUsername", insidersConfig.ProfileManagerAPIUsername));
                soapEnvelopeXml.LoadXml(soapEnvelopeXml.InnerXml.Replace("APIPassword", insidersConfig.ProfileManagerAPIPassword));
            }


            using (Stream stream = request.GetRequestStream())
            {
                soapEnvelopeXml.Save(stream);
            }

            try
            {
                using (WebResponse response = request.GetResponse())
                {
                    using (StreamReader rd = new StreamReader(response.GetResponseStream()))
                    {
                        string soapResult = rd.ReadToEnd();
                        logger.Information("Insiders Repo :ReadRecordSSOValidateUser response = " + soapResult ?? string.Empty);

                        soapEnvelopeXml.LoadXml(soapResult);
                    }
                }
            }
            catch (Exception ex)
            {
                logger.Information("Insiders Repo :ReadRecordSSOValidateUser response = " + ex.Message);
            }

            if (soapEnvelopeXml.GetElementsByTagName("GivenName").Count > 0)
            {
                ps.FirstName = soapEnvelopeXml.GetElementsByTagName("GivenName")[0].InnerText;
            }

            if (soapEnvelopeXml.GetElementsByTagName("Profile").Count > 0)
            {
                string subscribe = soapEnvelopeXml.GetElementsByTagName("Profile")[0].Attributes[3].Value;
                ps.SubscribeForEmail = subscribe;
            }
            var customer = soapEnvelopeXml.GetElementsByTagName("Customer");
            if (customer.Count > 0)
            {
                ps.BirthDay = customer[0].Attributes["BirthDate"].Value;
            }
            if (soapEnvelopeXml.GetElementsByTagName("CountryName").Count > 0)
            {
                ps.Country = soapEnvelopeXml.GetElementsByTagName("CountryName")[0].Attributes["Code"].Value;
            }

            var custLoyalty = soapEnvelopeXml.GetElementsByTagName("CustLoyalty");
            if (custLoyalty.Count > 0)
            {
                ps.IsCustLoyalty = true;
                ps.SignupDate = custLoyalty[0].Attributes["SignupDate"].Value;
                ps.EffectiveDate = custLoyalty[0].Attributes["EffectiveDate"].Value;
                ps.ExpireDate = custLoyalty[0].Attributes["ExpireDate"].Value;
            }
            else
            {
                ps.IsCustLoyalty = false;
            }

            var uniqueIds = soapEnvelopeXml.GetElementsByTagName("UniqueID");

            if (soapEnvelopeXml.GetElementsByTagName("UniqueID").Count > 0)
            {
                for (int i = 0; i < uniqueIds.Count; i++)
                {
                    var idContext = uniqueIds[i].Attributes["ID_Context"].Value;

                    if (string.Equals(idContext, "crm", StringComparison.CurrentCultureIgnoreCase))
                    {
                        ps.crmID = uniqueIds[i].Attributes["ID"].Value;
                        SetFirstName(ps, uniqueIds[i].ParentNode);

                        continue;
                    }
                }
            }
            return ps;
        }
        public static HttpWebRequest CreateWebRequest()
        {
            var rootPageReference = ContentReference.StartPage;
            var sitePageReference = contentLoader.Get<PageData>(rootPageReference).ParentLink;
            var site = contentLoader.Get<HBGSite>(sitePageReference);
            var insidersConfig = CreateInsiderConfig(site);

            string apiUrl;

            if (!string.IsNullOrEmpty(insidersConfig.ProfileManagerAPIUrl))
            {
                apiUrl = insidersConfig.ProfileManagerAPIUrl;
            }
            else
            {
                apiUrl = @"https://usertest.synxis.com/interface/ProfileManager.asmx";
            }

            logger.Information("Insiders Repo:CreateWebRequest started");
            logger.Information("Insiders Repo:CreateWebRequest: ProfileManageAPIUrl= " + apiUrl ?? string.Empty);

            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls12;

            HttpWebRequest webRequest = (HttpWebRequest)WebRequest.Create(apiUrl);
            webRequest.Headers.Add(@"SOAP:Action");
            webRequest.ContentType = "text/xml;charset=\"utf-8\"";
            webRequest.Accept = "text/xml";
            webRequest.Method = "POST";

            logger.Information("Insiders Repo:CreateWebRequest completed");
            return webRequest;
        }
        public static HBGInsidersConfigurationBlock CreateInsiderConfig(HBGSite site)
        {
            try
            {
                var insiderConfigPath = HBGPathConstants.RelativeConfig.Replace("StayFarEast", site.Name.ToString()) + "/" + TemplateNames.InsidersConfiguration;
                if (string.IsNullOrWhiteSpace(insiderConfigPath))
                    return null;

                var getInsiderConfig = BlockHelper.GetDescendantPath(ContentReference.GlobalBlockFolder, insiderConfigPath);
                var insiderConfig = getInsiderConfig != null ? contentLoader.Get<HBGInsidersConfigurationBlock>(getInsiderConfig) : null;
                return insiderConfig;
            }
            catch (Exception exp)
            {
                logger.Error("Error in CreateInsiderConfig(): " + exp.InnerException);
                return null;
            }
        }
        /// <summary>
        /// Set First Name from CRM
        /// </summary>
        private static void SetFirstName(PersonalInfoSection info, XmlNode profile)
        {
            try
            {
                for (int i = 0; i < profile.ChildNodes.Count; i++)
                {
                    if (profile.ChildNodes[i].Name == "Profile")
                    {
                        for (int j = 0; j < profile.ChildNodes[i].ChildNodes.Count; j++)
                        {
                            if (profile.ChildNodes[i].ChildNodes[j].Name == "Customer")
                            {
                                for (int k = 0; k < profile.ChildNodes[i].ChildNodes[j].ChildNodes.Count; k++)
                                {
                                    if (profile.ChildNodes[i].ChildNodes[j].ChildNodes[k].Name == "PersonName")
                                    {
                                        for (int l = 0; l < profile.ChildNodes[i].ChildNodes[j].ChildNodes[k].ChildNodes.Count; l++)
                                        {
                                            if (profile.ChildNodes[i].ChildNodes[j].ChildNodes[k].ChildNodes[l].Name == "GivenName")
                                            {
                                                info.FirstName = profile.ChildNodes[i].ChildNodes[j].ChildNodes[k].ChildNodes[1].InnerText;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                logger.Information("Insiders Repo:SetFirstName. Error: " + ex.ToString());
            }
        }
    }
}
