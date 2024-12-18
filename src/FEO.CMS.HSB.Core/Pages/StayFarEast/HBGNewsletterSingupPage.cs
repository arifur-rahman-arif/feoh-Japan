using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGNewsletterSingupPage", GUID = "3C96D2FC-D804-40C6-988B-F12982B650ED", GroupName = "Hospitality")]
    public class HBGNewsletterSignupPage : HBGBasePage
    {
        [Display(Name = "Footer Text", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString FooterText { get; set; }

        [Display(Name = "Form Parameters", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string FormParameters { get; set; }

        [Display(Name = "Form URL", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual LinkItem FormURL { get; set; }

        [Display(Name = "Header Text", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString HeaderText { get; set; }

        [Display(Name = "Return URL", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        public virtual LinkItem ReturnURL { get; set; }

        [Display(Name = "Error Redirect URL", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        public virtual LinkItem ErrorRedirectURL { get; set; }

    }
}
