using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationRoomBlock", GUID = "D86309B6-351C-4C38-926A-EB4870C17BA1", GroupName = "Hospitality")]
    public class HBGStaycationRoomBlock : HBGBaseBlock
    {
        [Display(Name = "Main Image", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference MainImage { get; set; }

        [Display(Name = "Left Image", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LeftImage { get; set; }

        [Display(Name = "Middle Image", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference MiddleImage { get; set; }

        [Display(Name = "Right Image", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference RightImage { get; set; }

        [Display(Name = "Room Title", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        public virtual string RoomTitle { get; set; }

        [Display(Name = "Room Description", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString RoomDescription { get; set; }

        [Display(Name = "Room Highlight", GroupName = SystemTabNames.Content, Order = 700)]
        [CultureSpecific]
        public virtual string RoomHighlight { get; set; }

    }
}
