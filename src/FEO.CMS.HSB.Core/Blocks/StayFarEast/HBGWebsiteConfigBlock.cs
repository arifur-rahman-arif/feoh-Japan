using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGWebsiteConfigBlock", GUID = "8ABFB406-32C4-49E5-A0AD-0D9877600F2F", GroupName = "Hospitality")]
    public class HBGWebsiteConfigBlock : HBGBaseBlock
    {
        [Display(Name = "App Id", GroupName = "Exchange Rate API", Order = 100)]
        [CultureSpecific]
        public virtual string AppId { get; set; }

        [Display(Name = "Apple Touch Icon", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference AppleTouchIcon { get; set; }

        [Display(Name = "DelaySeconds", GroupName = "Values", Order = 100)]
        [CultureSpecific]
        public virtual double DelaySeconds { get; set; }

        [Display(Name = "Enable Scroll To Top", GroupName = "Scroll To Top Settings", Order = 100)]
        [CultureSpecific]
        public virtual bool EnableScrollToTop { get; set; }

        [Display(Name = "Enable To Show Rate", GroupName = "Show Rate Settings", Order = 100)]
        [CultureSpecific]
        public virtual bool EnableToShowRate { get; set; }

        [Display(Name = "Lead API Url", GroupName = "Synsix Configuration Lead", Order = 100)]
        [CultureSpecific]
        public virtual string LeadAPIUrl { get; set; }

        [Display(Name = "Token API Url", GroupName = "Synsix Configuration Token", Order = 100)]
        [CultureSpecific]
        public virtual string TokenAPIUrl { get; set; }

        [Display(Name = "WebSite Schema Url", GroupName = "Website Schema", Order = 100)]
        [CultureSpecific]
        public virtual string WebSiteSchemaUrl { get; set; }

        [Display(Name = "Exchange Rates", GroupName = "Exchange Rate API", Order = 200)]
        [CultureSpecific]
        public virtual XhtmlString ExchangeRates { get; set; }

        [Display(Name = "Favicon URL", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        public virtual string FaviconURL { get; set; }

        [Display(Name = "Popup Session Valid in Days", GroupName = "Values", Order = 200)]
        [CultureSpecific]
        public virtual double PopupSessionValidinDays { get; set; }

        [Display(Name = "User Name", GroupName = "Synsix Configuration Token", Order = 200)]
        [CultureSpecific]
        public virtual string UserName { get; set; }

        [Display(Name = "WebSite Schema Name", GroupName = "Website Schema", Order = 200)]
        [CultureSpecific]
        public virtual string WebSiteSchemaName { get; set; }

        [Display(Name = "Password", GroupName = "Synsix Configuration Token", Order = 250)]
        [CultureSpecific]
        public virtual string Password { get; set; }

        [Display(Name = "Pop Up Icon", GroupName = "Images", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference PopUpIcon { get; set; }

        [Display(Name = "Chain Id", GroupName = "Synsix Configuration Lead", Order = 400)]
        [CultureSpecific]
        public virtual string ChainId { get; set; }

        [Display(Name = "Hotel Icon", GroupName = "Images", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference HotelIcon { get; set; }

        [Display(Name = "Download Brochure Icon", GroupName = "Images", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference DownloadBrochureIcon { get; set; }

        [Display(Name = "No Of Adults Default", GroupName = "Synsix Configuration Lead", Order = 500)]
        [CultureSpecific]
        public virtual double NoOfAdultsDefault { get; set; }

        [Display(Name = "No Of Children Default", GroupName = "Synsix Configuration Lead", Order = 600)]
        [CultureSpecific]
        public virtual double NoOfChildrenDefault { get; set; }

        [Display(Name = "Business Context", GroupName = "Synsix Configuration Token", Order = 625)]
        [CultureSpecific]
        public virtual string BusinessContext { get; set; }

        [Display(Name = "No Of Room Default", GroupName = "Synsix Configuration Lead", Order = 650)]
        [CultureSpecific]
        public virtual double NoOfRoomDefault { get; set; }

        [Display(Name = "Length Of Stay Default", GroupName = "Synsix Configuration Lead", Order = 675)]
        [CultureSpecific]
        public virtual double LengthOfStayDefault { get; set; }

        [Display(Name = "Primary Channel", GroupName = "Synsix Configuration Lead", Order = 700)]
        [CultureSpecific]
        public virtual string PrimaryChannel { get; set; }

        [Display(Name = "Secondary Channel", GroupName = "Synsix Configuration Lead", Order = 800)]
        [CultureSpecific]
        public virtual string SecondaryChannel { get; set; }

        [Display(Name = "User Type", GroupName = "Synsix Configuration Token", Order = 862)]
        [CultureSpecific]
        public virtual string UserType { get; set; }

        [Display(Name = "Loyalty Program", GroupName = "Synsix Configuration Lead", Order = 900)]
        [CultureSpecific]
        public virtual string LoyaltyProgram { get; set; }

        [Display(Name = "Loyalty Level", GroupName = "Synsix Configuration Lead", Order = 1000)]
        [CultureSpecific]
        public virtual string LoyaltyLevel { get; set; }

        [Display(Name = "Grant Type", GroupName = "Synsix Configuration Token", Order = 1031)]
        [CultureSpecific]
        public virtual string GrantType { get; set; }

    }
}
