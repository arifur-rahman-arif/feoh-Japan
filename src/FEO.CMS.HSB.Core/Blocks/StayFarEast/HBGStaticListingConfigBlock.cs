using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaticListingConfigBlock", GUID = "EAB2E589-36B1-4AD1-ACDE-BD0501FE784F", GroupName = "Hospitality")]
    public class HBGStaticListingConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Enable Horizontal Scroll", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool EnableHorizontalScroll { get; set; }

    }
}
