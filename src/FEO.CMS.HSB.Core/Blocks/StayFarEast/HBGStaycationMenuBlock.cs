using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationMenuBlock", GUID = "6A94066D-D27A-488C-98CE-C7CDF06EE062", GroupName = "Hospitality")]
    public class HBGStaycationMenuBlock : HBGBaseBlock
    {
        [Display(Name = "Menu Title", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string MenuTitle { get; set; }

        [Display(Name = "Menu Selector", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string MenuSelector { get; set; }

    }
}
