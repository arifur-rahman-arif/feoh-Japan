using EPiServer.ServiceLocation;
using FEO.CMS.HBG.Core.Constants;
using Microsoft.AspNetCore.Mvc;
using FEO.CMS.HBG.Business.Forms;
using static FEO.CMS.HBG.Business.Forms.InsidersRepository;
using FEO.CMS.HBG.Models;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Pages;
using FEO.CMS.HBG.Helper;
using EPiServer.Logging;
using System.Text;
using System.Text.Json;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;
using System.Security.Cryptography;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    [ApiController]
    [Route("api/sitecore/[controller]")]
    public class StayFarEastInsidersController : Controller
    {
        private static readonly EPiServer.Logging.ILogger logger = LogManager.GetLogger(typeof(StayFarEastInsidersController));
        private static IContentLoader contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
        
        [HttpPost("SignIn")]
        public ActionResult SignIn(IFormCollection loginDetails)
        {
            var rootPageReference = ContentReference.StartPage;
            var sitePageReference = contentLoader.Get<PageData>(rootPageReference).ParentLink;
            var site = contentLoader.Get<HBGSite>(sitePageReference);
            var insidersConfig = CreateInsiderConfig(site);
            var session = HttpContext?.Session;

            string email = loginDetails[FieldNames.InsidersFieldName.SessionEmail];
            string password = loginDetails[FieldNames.InsidersFieldName.Password];
            string gRecaptchaToken = loginDetails[FieldNames.InsidersFieldName.GRecaptchaToken];
            GoogleCaptchaResponse response = ValidateCaptcha(gRecaptchaToken);
            //if (Request.Cookies["signup"] != null)
            //{
            //    HttpCookie myCookie = new HttpCookie("signup");
            //    myCookie.Expires = DateTime.Now.AddDays(-1d);
            //    Response.Cookies.Add(myCookie);
            //}

            var showCaptcha = insidersConfig.ShowCaptchaonSignInModal;
            if (!showCaptcha || response.Success)
            {
                var user = new PersonalInfoSection();

                if (!string.IsNullOrEmpty(email) && !string.IsNullOrEmpty(password))
                {
                    user = ReadRecordSSOValidateUser(email, password);
                }

                if (!string.IsNullOrEmpty(user.FirstName))
                {
                    string crmID = user.crmID;

                    //FormAuthentication.RegenerateSessionId(email);
                    //Task<string> token = GenerateToken(email, crmID, session);
                    //session?.SetString(FieldNames.InsidersFieldName.Token, token.Result);
                    //FormsAuthentication.SetAuthCookie(email, false);
                    session?.SetString(FieldNames.InsidersFieldName.SessionEmail, email);
                    session?.SetString(FieldNames.InsidersFieldName.FirstName, user.FirstName);
                    session?.SetString(FieldNames.InsidersFieldName.CrmId, user.crmID);
                    session?.SetString(FieldNames.InsidersFieldName.SessionUserID, user.crmID);

                    session?.SetString(FieldNames.InsidersFieldName.UserIsCustLoyalty, user.IsCustLoyalty.ToString());
                    session?.SetString(FieldNames.InsidersFieldName.UserSignupDate, user.SignupDate);
                    session?.SetString(FieldNames.InsidersFieldName.UserEffectiveDate, user.EffectiveDate);
                    session?.SetString(FieldNames.InsidersFieldName.UserExpireDate, user.ExpireDate);

                    session?.SetString(FieldNames.InsidersFieldName.Birthday, user.BirthDay);
                    session?.SetString(FieldNames.InsidersFieldName.Country, user.Country);


                    Response.Headers.Add("Clear-Site-Data", "\"cache\"");

                    if (insidersConfig != null)
                    {
                        return Json("Y" + "|" + insidersConfig.SignOutPageRedirect.Href); //SignInPageRedirect
                    }
                    else
                        return Content("/");
                }
            }
            return Content("Fail");
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
        private static string GenerateToken(string email, string crmID, ISession session)
        {
            var rootPageReference = ContentReference.StartPage;
            var sitePageReference = contentLoader.Get<PageData>(rootPageReference).ParentLink;
            var site = contentLoader.Get<HBGSite>(sitePageReference);
            var insidersConfig = CreateInsiderConfig(site);

            string token = string.Empty;
            try
            {
                using (var client = new System.Net.Http.HttpClient())
                {
                    var requestMessage = new HttpRequestMessage
                    {
                        Method = HttpMethod.Post,
                        RequestUri = new Uri(insidersConfig.TokenEndpoint)
                    };

                    requestMessage.Headers.Add("ContentType", "application/json");

                    var jsonBody = "{\"grant_type\":\" " + insidersConfig.GrantType + "\",\"client_id\": \"" + insidersConfig.ClientId + "\",\"client_secret\": \"" + insidersConfig.ClientSecret + "\",\"scope\":" + insidersConfig.Scope + ", \"account_id\": \"" + insidersConfig.AccountId + "\"}";
                    logger.Information("Insiders Repo:GenerateToken(ins): Request= " + jsonBody ?? string.Empty);
                    requestMessage.Content = new StringContent(jsonBody, Encoding.UTF8, "application/json");

                    logger.Information("Insiders Repo:GenerateToken(ins): SFMCUpsertEndpoint= " + insidersConfig.UpsertEndpoint ?? string.Empty);

                    var result = client.SendAsync(requestMessage, HttpCompletionOption.ResponseContentRead).Result;

                    string responseBody = result.Content.ReadAsStringAsync().Result;

                    if (!string.IsNullOrEmpty(responseBody))
                    {
                        logger.Information("Insiders Repo:GenerateToken(email,profileID) response body= " + responseBody ?? string.Empty);
                        var JSONObj = JsonConvert.DeserializeObject<Dictionary<string, string>>(responseBody);
                        token = JSONObj["access_token"];

                        session?.SetString(FieldNames.InsidersFieldName.SfmcToken, token);
                    }
                }
                return token;
            }
            catch (Exception ex)
            {
                logger.Information("Stayfareast Insider GenerateToken(ins): Not able to generate token - SFMC. Error: " + ex.ToString());
                return null;
            }
        }

        [HttpPost("EncryptEmail")]
        public string EncryptEmail(string input)
        {
            logger.Information("Insiders Repo:Generate Unique Id started  email is " + input ?? string.Empty);
            String dt = "";
            String cryptoStr = "";
            dt = DateTime.Now.ToString("MMmmddssHH");
            cryptoStr = GetUniqueKeyCrypto(8);
            cryptoStr = cryptoStr.Substring(0, 4) + dt + cryptoStr.Substring(4, 4);
            logger.Information("Insiders Repo:Generate Unique Id finished  Unique ID is " + cryptoStr.ToUpper());
            return cryptoStr.ToUpper();

        }
        public static string GetUniqueKeyCrypto(int size)
        {
            char[] chars =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".ToCharArray();
            byte[] data = new byte[size];
            using (RNGCryptoServiceProvider crypto = new RNGCryptoServiceProvider())
            {
                crypto.GetBytes(data);
            }
            StringBuilder result = new StringBuilder(size);
            foreach (byte b in data)
            {
                result.Append(chars[b % (chars.Length)]);
            }
            return result.ToString();
        }
    }
}
