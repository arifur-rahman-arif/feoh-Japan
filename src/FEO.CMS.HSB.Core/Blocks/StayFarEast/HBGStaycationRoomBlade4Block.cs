using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationRoomBlade4Block", GUID = "15A7984D-4791-49CA-AE7F-1A06A18B6945", GroupName = "Hospitality")]
    public class HBGStaycationRoomBlade4Block : HBGBaseBlock
    {
        [Display(Name = "Blade Icon", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BladeIcon { get; set; }

        [Display(Name = "Blade Title", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString BladeTitle { get; set; }

        [Display(Name = "Blade Banner", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BladeBanner { get; set; }

        [Display(Name = "Room Title", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual string RoomTitle { get; set; }

        [Display(Name = "Room Description", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString RoomDescription { get; set; }

    }
}
