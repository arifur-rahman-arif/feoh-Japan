using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationPage", GUID = "75BA3CA7-68FE-4737-B34D-2A68D7519403", GroupName = "Hospitality")]
    public class HBGStaycationPage : HBGBasePage
    {
        [Display(Name = "Logo Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LogoImage { get; set; }

        [Display(Name = "Main Content", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString MainContent { get; set; }

        [Display(Name = "Heading", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        public virtual string Heading { get; set; }

        [Display(Name = "Breadcrumb", Description = "sfecontentcrumbs", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Breadcrumb { get; set; }

        [Display(Name = "Content Navigation", Description = "sfecontentsubnav", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual ContentArea ContentNav { get; set; }

        [Display(Name = "Main Highlight", Description = "sfemainhighlight", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual ContentArea MainHighlight { get; set; }

        [Display(Name = "Main Content", Description = "sfemaincontent", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual ContentArea SfeMainContent { get; set; }

    }
}
