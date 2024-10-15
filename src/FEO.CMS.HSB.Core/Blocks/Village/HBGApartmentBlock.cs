using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGApartmentBlock", GUID = "0B99AEA5-1F75-4DB8-8816-743E842F9F28", GroupName = "Hospitality")]
    public class HBGApartmentBlock : HBGBaseBlock
    {
        [Display(Name = "Room Area", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string RoomArea { get; set; }

        [Display(Name = "Bed Size", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string BedSize { get; set; }

        [Display(Name = "Guest Capacity", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        public virtual string GuestCapacity { get; set; }

        [Display(Name = "Room Feature One", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        public virtual string RoomFeatureOne { get; set; }

        [Display(Name = "Room Feature Two", GroupName = "Content", Order = 500)]
        [CultureSpecific]
        public virtual string RoomFeatureTwo { get; set; }

        [Display(Name = "Room Feature Three", GroupName = "Content", Order = 600)]
        [CultureSpecific]
        public virtual string RoomFeatureThree { get; set; }

    }
}
