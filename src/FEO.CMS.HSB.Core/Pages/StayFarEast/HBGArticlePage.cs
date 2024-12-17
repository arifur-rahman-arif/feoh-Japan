using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGArticlePage", GUID = "48CA580C-9277-4005-A578-5051B182CA61", GroupName = "Hospitality")]
    public class HBGArticlePage : HBGBasePage
    {
        [Display(Name = "Category Content Override", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString CategoryContentOverride { get; set; }

        [Display(Name = "Enable Read More Link", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool EnableReadMoreLink { get; set; }

        [Display(Name = "Main Content", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString MainContent { get; set; }

        [Display(Name = "Title Content Override", GroupName = SystemTabNames.Settings, Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString TitleContentOverride { get; set; }

        [Display(Name = "Category1", GroupName = "Profile", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Category1 { get; set; }

        [Display(Name = "Article Category Name", GroupName = "Profile", Order = 200)]
        [CultureSpecific]
        public virtual string ArticleCategoryName { get; set; }

    }
}
