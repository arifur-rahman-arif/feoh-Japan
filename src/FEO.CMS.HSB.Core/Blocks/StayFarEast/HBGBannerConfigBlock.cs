using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGBannerConfigBlock", GUID = "32D961F0-8FA2-4C94-B9AD-9BFB3BDD5838", GroupName = "Hospitality")]
    public class HBGBannerConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Enlarge Current Item Title", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool EnlargeCurrentItemTitle { get; set; }

        [Display(Name = "Show Banner Summary", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual bool ShowBannerSummary { get; set; }

        [Display(Name = "Show Banner Title", GroupName = SystemTabNames.Settings, Order = 300)]
        [CultureSpecific]
        public virtual bool ShowBannerTitle { get; set; }

        [Display(Name = "Show Current Item Caption", GroupName = SystemTabNames.Settings, Order = 400)]
        [CultureSpecific]
        public virtual bool ShowCurrentItemCaption { get; set; }

        [Display(Name = "Show Current Item Title", GroupName = SystemTabNames.Settings, Order = 500)]
        [CultureSpecific]
        public virtual bool ShowCurrentItemTitle { get; set; }

        [Display(Name = "Use Description As Summary", GroupName = SystemTabNames.Settings, Order = 600)]
        [CultureSpecific]
        public virtual bool UseDescriptionAsSummary { get; set; }

    }
}
