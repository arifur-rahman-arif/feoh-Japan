using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Rendezvous
{
    [ContentType(DisplayName = "HBGCarouselConfigBlock", GUID = "D54DBB63-E1A8-4995-A59B-96DF65B2E3C9", GroupName = "Hospitality")]
    public class HBGCarouselConfigBlock : HBGBaseBlock
    {
        [Display(Name = "RedirectToCurrentSite", GroupName = SystemTabNames.Settings, Order = 1000)]
        [CultureSpecific]
        public virtual bool RedirectToCurrentSite { get; set; }

        [Display(Name = "ShowPullOutWidget", GroupName = SystemTabNames.Settings, Order = 1100)]
        [CultureSpecific]
        public virtual bool ShowPullOutWidget { get; set; }

        [Display(Name = "FontColor", GroupName = SystemTabNames.Settings, Order = 1200)]
        [CultureSpecific]
        public virtual ContentReference FontColor { get; set; }

        [Display(Name = "BackgroundColorStyleNames", GroupName = SystemTabNames.Settings, Order = 1300)]
        [CultureSpecific]
        public virtual ContentReference BackgroundColorStyleNames { get; set; }

    }
}
