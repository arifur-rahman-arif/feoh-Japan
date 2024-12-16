using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGBannerVillageConfigBlock", GUID = "9C6519F4-24EA-469F-A5D9-FDCA43680746", GroupName = "Hospitality")]
    public class HBGBannerVillageConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Enlarge Current Item Title", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool EnlargeCurrentItemTitle { get; set; }

        [Display(Name = "Show view gallery button", GroupName = SystemTabNames.Settings, Order = 300)]
        [CultureSpecific]
        public virtual bool Showviewgallerybutton { get; set; }

        [Display(Name = "Show Pullout Widget", GroupName = SystemTabNames.Settings, Order = 400)]
        [CultureSpecific]
        public virtual bool ShowPulloutWidget { get; set; }

        [Display(Name = "Sticky Widget", GroupName = SystemTabNames.Settings, Order = 500)]
        [CultureSpecific]
        public virtual bool StickyWidget { get; set; }

        [Display(Name = "Font Color", GroupName = SystemTabNames.Settings, Order = 600)]
        [CultureSpecific]
        public virtual ContentReference FontColor { get; set; }

        [Display(Name = "Background Color Style Names", GroupName = SystemTabNames.Settings, Order = 700)]
        [CultureSpecific]
        public virtual ContentReference BackgroundColorStyleNames { get; set; }

    }
}
