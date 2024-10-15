using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGVenueSettingBlock", GUID = "DAA8528C-4B5E-45D0-92B6-8503394801D8", GroupName = "Hospitality")]
    public class HBGVenueSettingBlock : HBGBaseBlock
    {
        [Display(Name = "Capacity", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Capacity { get; set; }

        [Display(Name = "Icon", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual ContentReference Icon { get; set; }

    }
}
