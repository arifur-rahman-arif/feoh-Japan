using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGBannerDownwardArrowConfigBlock", GUID = "E3027B1C-30F9-43DF-9C95-B4BDF4A5A3FC", GroupName = "Hospitality")]
    public class HBGBannerDownwardArrowConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Show Downward Arrow", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual bool ShowDownwardArrow { get; set; }

    }
}
