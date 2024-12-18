using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationRoomBlade7ConfigBlock", GUID = "503BF56A-6E06-4476-A8A8-FFE12B5F3DAE", GroupName = "Hospitality")]
    public class HBGStaycationRoomBlade7ConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Show", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool Show { get; set; }

    }
}
