using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGVenueSettingBlock", GUID = "DAA8528C-4B5E-45D0-92B6-8503394801D8", GroupName = "Hospitality")]
    public class HBGVenueSettingBlock : HBGNameValuePairBlock
    {
        [Display(Name = "Capacity", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Capacity { get; set; }

        [Display(Name = "Icon", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual ContentReference Icon { get; set; }

    }
}
