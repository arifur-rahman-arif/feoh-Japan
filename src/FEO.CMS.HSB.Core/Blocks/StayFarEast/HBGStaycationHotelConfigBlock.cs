using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationHotelConfigBlock", GUID = "FE2D29F1-749A-4F51-A3B7-86D0E6879EC9", GroupName = "Hospitality")]
    public class HBGStaycationHotelConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Show", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool Show { get; set; }

    }
}
