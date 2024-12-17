using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationRoomBlade4ConfigBlock", GUID = "8C9532FF-B52D-4810-8339-54844CEA84BA", GroupName = "Hospitality")]
    public class HBGStaycationRoomBlade4ConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Show", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool Show { get; set; }

    }
}
