using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGCuratedCardCarouselFolderBlock", GUID = "1056F7B7-B465-43C0-BD87-E8E78840E5E4", GroupName = "Hospitality")]
    public class HBGCuratedCardCarouselFolderBlock : HBGCTAOneSettingBlock
    {
        [Display(Name = "ChildrenFolderReference", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference ChildrenFolderReference { get; set; }
    }
}
