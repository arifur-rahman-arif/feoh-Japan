using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGHomeBannerConfigBlock", GUID = "D312C13B-550E-47FE-A949-A7C2C9A4812A", GroupName = "Hospitality")]
    public class HBGHomeBannerConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Position Booking Widget", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference PositionBookingWidget { get; set; }

        [Display(Name = "Background Color", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual ContentReference BackgroundColor { get; set; }

    }
}
