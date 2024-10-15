using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGCarouselItemBlock", GUID = "51080BCF-072D-47F9-99EB-A81A8F990282", GroupName = "Hospitality")]
    public class HBGCarouselItemBlock : HBGBaseBlock
    {
        [Display(Name = "Caption", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string Caption { get; set; }

        [Display(Name = "Featured Title", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string FeaturedTitle { get; set; }

        [Display(Name = "Is Featured", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        public virtual bool IsFeatured { get; set; }

        [Display(Name = "Linked Content", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        public virtual LinkItem LinkedContent { get; set; }

        [Display(Name = "Video Source", GroupName = "Content", Order = 500)]
        [CultureSpecific]
        public virtual LinkItem VideoSource { get; set; }

        [Display(Name = "Summary", GroupName = "Content", Order = 600)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Summary { get; set; }

    }
}
