using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGRoomBlock", GUID = "2A0681A8-F64B-4D33-80E1-CF110BB1361A", GroupName = "Hospitality")]
    public class HBGRoomBlock : HBGBaseBlock
    {
        [Display(Name = "Room Area", GroupName = "Profile", Order = 100)]
        [CultureSpecific]
        public virtual string RoomArea { get; set; }

        [Display(Name = "Thumbnail Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ThumbnailImage { get; set; }

        [Display(Name = "Guest Capacity", GroupName = "Profile", Order = 200)]
        [CultureSpecific]
        public virtual string GuestCapacity { get; set; }

        [Display(Name = "Bed Size", GroupName = "Profile", Order = 300)]
        [CultureSpecific]
        public virtual string BedSize { get; set; }

        [Display(Name = "Room Feature One", GroupName = "Profile", Order = 400)]
        [CultureSpecific]
        public virtual string RoomFeatureOne { get; set; }

        [Display(Name = "Room Feature Two", GroupName = "Profile", Order = 500)]
        [CultureSpecific]
        public virtual string RoomFeatureTwo { get; set; }

        [Display(Name = "Room Feature Three", GroupName = "Profile", Order = 600)]
        [CultureSpecific]
        public virtual string RoomFeatureThree { get; set; }

        [Display(Name = "Services", GroupName = "Profile", Order = 700)]
        [CultureSpecific]
        public virtual string Services { get; set; }

    }
}
