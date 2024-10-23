using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGRichContentPage", GUID = "B0A0D1F8-2851-4C80-A80C-1DA43EBA26F3", GroupName = "Hospitality")]
    public class HBGRichContentPage : HBGBasePage
    {
        [Display(Name = "Main Content", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString MainContent { get; set; }

        [Display(Name = "Title Content Override", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString TitleContentOverride { get; set; }

        [Display(Name = "Form Title", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual string FormTitle { get; set; }

        [Display(Name = "Location", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual ContentReference Location { get; set; }

    }
}
