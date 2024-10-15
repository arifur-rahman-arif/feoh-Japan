using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGArticlePage", GUID = "48CA580C-9277-4005-A578-5051B182CA61", GroupName = "Hospitality")]
    public class HBGArticlePage : HBGBasePage
    {
        [Display(Name = "Category Content Override", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString CategoryContentOverride { get; set; }

        [Display(Name = "Enable Read More Link", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual bool EnableReadMoreLink { get; set; }

        [Display(Name = "Main Content", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString MainContent { get; set; }

        [Display(Name = "Title Content Override", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString TitleContentOverride { get; set; }

    }
}
