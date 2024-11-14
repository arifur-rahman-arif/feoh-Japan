using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGCarouselBlock", GUID = "5F8EE962-640C-4B66-BF14-A651A2FD7BFE", GroupName = "Hospitality")]
    public class HBGCarouselBlock : HBGStickyWidgetBlock
    {
        [Display(Name = "Video Target", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string VideoTarget { get; set; }

        [Display(Name = "CSS Class Name", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference CSSClassName { get; set; }

        [Display(Name = "Is Vertical Aligned", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual bool IsVerticalAligned { get; set; }

        [Display(Name = "Remove Content Padding", GroupName = "Settings", Order = 400)]
        [CultureSpecific]
        public virtual bool RemoveContentPadding { get; set; }

        [Display(Name = "Show Controls", GroupName = "Settings", Order = 500)]
        [CultureSpecific]
        public virtual bool ShowControls { get; set; }

        [Display(Name = "Show Divider", GroupName = "Settings", Order = 600)]
        [CultureSpecific]
        public virtual bool ShowDivider { get; set; }

        [Display(Name = "Show Indicator", GroupName = "Settings", Order = 700)]
        [CultureSpecific]
        public virtual bool ShowIndicator { get; set; }

        [Display(Name = "Show Summary", GroupName = "Settings", Order = 800)]
        [CultureSpecific]
        public virtual bool ShowSummary { get; set; }

        [Display(Name = "Show Title", GroupName = "Settings", Order = 900)]
        [CultureSpecific]
        public virtual bool ShowTitle { get; set; }

        [Display(Name = "Carousel Id Name", GroupName = "Settings", Order = 1000)]
        [CultureSpecific]
        public virtual ContentReference CarouselIdName { get; set; }

        [Display(Name = "Enable Darkness Overlay Image", GroupName = "Settings", Order = 800)]
        [CultureSpecific]
        public virtual bool EnableDarknessOverlayImage { get; set; }

        [Display(Name = "RedirectToCurrentSite", GroupName = "Settings", Order = 1000)]
        [CultureSpecific]
        public virtual bool RedirectToCurrentSite { get; set; }

        [Display(Name = "ShowPullOutWidget", GroupName = "Settings", Order = 1100)]
        [CultureSpecific]
        public virtual bool ShowPullOutWidget { get; set; }

        [Display(Name = "FontColor", GroupName = "Settings", Order = 1200)]
        [CultureSpecific]
        public virtual ContentReference FontColor { get; set; }

        [Display(Name = "BackgroundColorStyleNames", GroupName = "Settings", Order = 1300)]
        [CultureSpecific]
        public virtual ContentReference BackgroundColorStyleNames { get; set; }

    }
}
