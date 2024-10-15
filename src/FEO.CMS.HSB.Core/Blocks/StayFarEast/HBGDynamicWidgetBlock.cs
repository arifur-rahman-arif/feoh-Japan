using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGDynamicWidgetBlock", GUID = "39CFC4A5-8A0B-48A1-8CBC-749FBB4B3345", GroupName = "Hospitality")]
    public class HBGDynamicWidgetBlock : HBGBaseBlock
    {
        [Display(Name = "Highlight Text", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString HighlightText { get; set; }

        [Display(Name = "Highlight Text Color", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual ContentReference HighlightTextColor { get; set; }

        [Display(Name = "Background Color", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        public virtual ContentReference BackgroundColor { get; set; }

        [Display(Name = "Alignment", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        public virtual ContentReference Alignment { get; set; }

        [Display(Name = "Time Frame", GroupName = "Content", Order = 500)]
        [CultureSpecific]
        public virtual int TimeFrame { get; set; }

        [Display(Name = "Navigation Link", GroupName = "Content", Order = 600)]
        [CultureSpecific]
        public virtual LinkItem NavigationLink { get; set; }

        [Display(Name = "Hide On Mobile", GroupName = "Content", Order = 700)]
        [CultureSpecific]
        public virtual bool HideOnMobile { get; set; }

    }
}
