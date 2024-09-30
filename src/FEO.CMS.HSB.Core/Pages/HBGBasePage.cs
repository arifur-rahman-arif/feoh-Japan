using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages
{
    [ContentType(DisplayName = "RetailBasePage", GUID = "3697F7C1-CDB1-48F4-A84B-ABBF92013863", GroupName = "Hospitality")]
    public class HBGBasePage : PageData
    {
        [Display(Name = "Styles", GroupName = "Styling", Order = 0)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual string Styles { get; set; }

        [Display(Name = "Body Css Class", GroupName = "Styling", Order = 0)]
        [CultureSpecific]
        public virtual string BodyCssClass { get; set; }

        [Display(Name = "Title", GroupName = "Content", Order = 0)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "MetaKeywords", GroupName = "General", Order = 2)]
        [CultureSpecific]
        public virtual string MetaKeywords { get; set; }

        [Display(Name = "MetaDescription", GroupName = "General", Order = 3)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString MetaDescription { get; set; }

        [Display(Name = "HeaderScripts", GroupName = "General", Order = 203)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString HeaderScripts { get; set; }

        [Display(Name = "FooterScripts", GroupName = "General", Order = 303)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString FooterScripts { get; set; }

        [Display(GroupName = SystemTabNames.Content, Name = "Main Content Area", Description = "main", Order = 100)]
        public virtual ContentArea MainContentArea { get; set; }

        [Display(GroupName = SystemTabNames.Content, Name = "Header", Description = "head", Order = 100)]
        public virtual ContentArea Header { get; set; }

        [Display(GroupName = SystemTabNames.Content, Name = "Body Top", Description = "body-top", Order = 100)]
        public virtual ContentArea BodyTop { get; set; }

        [Display(GroupName = SystemTabNames.Content, Name = "Body Bottom", Description = "body-bottom", Order = 100)]
        public virtual ContentArea BodyBottom { get; set; }

        [Display(GroupName = SystemTabNames.Content, Name = "Footer", Description = "Footer", Order = 100)]
        public virtual ContentArea Footer { get; set; }
        public bool HideHeader { get; set; }
        public bool HideFooter { get; set; }
        public bool HideBreadcrumb { get; set; }
        public bool ShowInBreadcrumb { get; set; }

    }
}
