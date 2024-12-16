using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGBannerConfigBlock", GUID = "2EBE05AC-D240-46BD-8A5B-4EEB1B1ED9A8", GroupName = "Hospitality")]
    public class HBGBannerConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Text Alignment", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference TextAlignment { get; set; }

        [Display(Name = "Show Gallery", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual bool ShowGallery { get; set; }

        [Display(Name = "Font Size", GroupName = SystemTabNames.Settings, Order = 300)]
        [CultureSpecific]
        public virtual ContentReference FontSize { get; set; }

        [Display(Name = "Show Downward Arrow", GroupName = SystemTabNames.Settings, Order = 400)]
        [CultureSpecific]
        public virtual bool ShowDownwardArrow { get; set; }

        [Display(Name = "Show Pullout Widget", GroupName = SystemTabNames.Settings, Order = 500)]
        [CultureSpecific]
        public virtual bool ShowPulloutWidget { get; set; }

        [Display(Name = "Show Sticky Widget", GroupName = SystemTabNames.Settings, Order = 600)]
        [CultureSpecific]
        public virtual bool ShowStickyWidget { get; set; }

        [Display(Name = "Show Contacts", GroupName = SystemTabNames.Settings, Order = 700)]
        [CultureSpecific]
        public virtual bool ShowContacts { get; set; }

    }
}
