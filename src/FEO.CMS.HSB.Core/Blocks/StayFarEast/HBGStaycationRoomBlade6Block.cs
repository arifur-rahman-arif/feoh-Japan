using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationRoomBlade6Block", GUID = "F1D210BA-20EC-41FD-9F50-0444D461AFF5", GroupName = "Hospitality")]
    public class HBGStaycationRoomBlade6Block : HBGBaseBlock
    {
        [Display(Name = "Blade Banner 1", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BladeBanner1 { get; set; }

        [Display(Name = "Blade Banner 2", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BladeBanner2 { get; set; }

        [Display(Name = "Blade Banner 3", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BladeBanner3 { get; set; }

        [Display(Name = "Room Title", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual string RoomTitle { get; set; }

        [Display(Name = "Room Description", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString RoomDescription { get; set; }

    }
}
