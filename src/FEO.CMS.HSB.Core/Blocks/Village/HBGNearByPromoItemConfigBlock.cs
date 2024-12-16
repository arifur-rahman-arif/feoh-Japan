using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGNearByPromoItemConfigBlock", GUID = "D1F9F493-E104-47C2-B2FE-B46D1C254CD3", GroupName = "Hospitality")]
    public class HBGNearByPromoItemConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Show Nearby promo section", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool ShowNearbypromosection { get; set; }

    }
}
