using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGRoomDetailContainerBlock", GUID = "A6A0D944-BBAF-4083-B78E-362A4410EEB3", GroupName = "Hospitality")]
    public class HBGRoomDetailContainerBlock : HBGBaseBlock
    {
        [Display(Name = "About The Room", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual string AboutTheRoom { get; set; }

    }
}
