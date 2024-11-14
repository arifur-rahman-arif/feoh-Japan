using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGCarouselItemBlock", GUID = "51080BCF-072D-47F9-99EB-A81A8F990282", GroupName = "Hospitality")]
    public class HBGCarouselItemBlock : HBGBackgroundVideoBlock
    {
        [Display(Name = "Caption", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string Caption { get; set; }

        [Display(Name = "Featured Title", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string FeaturedTitle { get; set; }

        [Display(Name = "Is Featured", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual bool IsFeatured { get; set; }

        [Display(Name = "Linked Content", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual LinkItem LinkedContent { get; set; }

        [Display(Name = "Video Source", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        public virtual LinkItem VideoSource { get; set; }

        [Display(Name = "Summary", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Summary { get; set; }

        // Unmapped properties
        [Ignore]
        public bool IsVideo
        {
            get
            {
                return VideoSource != null;
            }
        }

        [Ignore]
        public bool IsBackgroundVideo
        {
            get
            {
                return BackgroundVideo != null && !string.IsNullOrEmpty(BackgroundVideo?.Href);
            }
        }

    }
}
