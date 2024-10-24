using Newtonsoft.Json;

namespace FEO.CMS.HBG.ViewModels
{
    public class SessionSettings
    {
        public int TimeoutInMinutes { get; set; }
    }
    public class Cms
    {
        public MappedRoles MappedRoles { get; set; }
    }

    public class CmsAdmins
    {
        public List<string> MappedRoles { get; set; }
    }

    public class CmsEditors
    {
        public List<string> MappedRoles { get; set; }
    }

    public class CmsUI
    {
        public Upload Upload { get; set; }
    }

    public class ConnectionStrings
    {
        public string EPiServerDB { get; set; }
    }

    public class CRM
    {
        public string EndpointAddress { get; set; }
        public string UserName { get; set; }
        public string PassWord { get; set; }
    }

    public class EntraSettings
    {
        public string ClientId { get; set; }
        public string ClientSecret { get; set; }
        public string TenantId { get; set; }
    }
    public class AliasSettings
    {
        public int AliasFolderID { get; set; }

    }

    public class GoogleMapsSettings
    {
        public string MapsKey { get; set; }
    }

    public class EpiServer
    {
        public Cms Cms { get; set; }
        public CmsUI CmsUI { get; set; }
        public Find Find { get; set; }
        public Forms Forms { get; set; }
    }

    public class Find
    {
        public string ServiceUrl { get; set; }
        public string DefaultIndex { get; set; }
    }

    public class Forms
    {
        public FormsConfig FormsConfig { get; set; }
    }

    public class FormsConfig
    {
        public int VisitorSubmitTimeout { get; set; }
        public bool DisableFormCookies { get; set; }
        public string DataExportBlobProviderName { get; set; }
        public bool SerializingObjectUsingNameValueFormat { get; set; }
        public bool SendMessageInHTMLFormat { get; set; }
        public string MinimumAccessRightLevelToReadFormData { get; set; }
        public string CoreController { get; set; }
        public string DefaultUploadExtensionBlackList { get; set; }
        public string FormElementViewsFolder { get; set; }
        public bool WorkInNonJSMode { get; set; }
        public bool InjectFormOwnStylesheet { get; set; }
        public bool InjectFormOwnJQuery { get; set; }
        public bool RenderingFormUsingDivElement { get; set; }
        public List<PreconfiguredFeed> PreconfiguredFeeds { get; set; }
        public RecaptchaKey RecaptchaKey { get; set; }
        public CRM CRM { get; set; }
    }

    public class Items
    {
        public CmsEditors CmsEditors { get; set; }
        public CmsAdmins CmsAdmins { get; set; }
    }

    public class Logging
    {
        public LogLevel LogLevel { get; set; }
    }

    public class LogLevel
    {
        public string Default { get; set; }
        public string Microsoft { get; set; }
        public string EPiServer { get; set; }

        [JsonProperty("Microsoft.Hosting.Lifetime")]
        public string MicrosoftHostingLifetime { get; set; }
    }

    public class MappedRoles
    {
        public Items Items { get; set; }
    }

    public class PreconfiguredFeed
    {
        public string Id { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public string KeyXPath { get; set; }
        public string ValueXPath { get; set; }
        public int CacheTimeout { get; set; }
    }

    public class RecaptchaKey
    {
        public string SiteKey { get; set; }
        public string SecretKey { get; set; }
    }

    public class Root
    {
        public Logging Logging { get; set; }
        public ConnectionStrings ConnectionStrings { get; set; }
        public EpiServer EpiServer { get; set; }
        public CmsUI CmsUI { get; set; }
        public EntraSettings EntraSettings { get; set; }
    }

    public class Upload
    {
        public int FileSizeLimit { get; set; }
    }


}
