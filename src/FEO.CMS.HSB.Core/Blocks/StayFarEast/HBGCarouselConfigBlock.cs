using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGCarouselConfigBlock", GUID = "2AC173D5-D194-47D4-87AA-62504FBD0D25", GroupName = "Hospitality")]
    public class HBGCarouselConfigBlock : HBGBaseBlock
    {
        [Display(Name = "CSS Class Name", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference CSSClassName { get; set; }

        [Display(Name = "Is Vertical Aligned", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual bool IsVerticalAligned { get; set; }

        [Display(Name = "Remove Content Padding", GroupName = SystemTabNames.Settings, Order = 400)]
        [CultureSpecific]
        public virtual bool RemoveContentPadding { get; set; }

        [Display(Name = "Show Controls", GroupName = SystemTabNames.Settings, Order = 500)]
        [CultureSpecific]
        public virtual bool ShowControls { get; set; }

        [Display(Name = "Show Divider", GroupName = SystemTabNames.Settings, Order = 600)]
        [CultureSpecific]
        public virtual bool ShowDivider { get; set; }

        [Display(Name = "Show Indicator", GroupName = SystemTabNames.Settings, Order = 700)]
        [CultureSpecific]
        public virtual bool ShowIndicator { get; set; }

        [Display(Name = "Show Summary", GroupName = SystemTabNames.Settings, Order = 800)]
        [CultureSpecific]
        public virtual bool ShowSummary { get; set; }

        [Display(Name = "Show Title", GroupName = SystemTabNames.Settings, Order = 900)]
        [CultureSpecific]
        public virtual bool ShowTitle { get; set; }

        [Display(Name = "Carousel Id Name", GroupName = SystemTabNames.Settings, Order = 1000)]
        [CultureSpecific]
        public virtual ContentReference CarouselIdName { get; set; }
    }
}
