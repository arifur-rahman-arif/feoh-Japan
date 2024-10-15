using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationRoomBlade5Block", GUID = "0EE394A9-B272-4256-A324-12E5FE9FA53F", GroupName = "Hospitality")]
    public class HBGStaycationRoomBlade5Block : HBGBaseBlock
    {
        [Display(Name = "Blade Banner", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BladeBanner { get; set; }

        [Display(Name = "Room Title", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string RoomTitle { get; set; }

        [Display(Name = "Room Description", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString RoomDescription { get; set; }

        [Display(Name = "Room Blurb", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        public virtual string RoomBlurb { get; set; }

    }
}
