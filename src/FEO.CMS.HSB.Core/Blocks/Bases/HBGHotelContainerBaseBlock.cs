using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGHotelContainerBaseBlock", GUID = "893E1A35-E9AF-4CFB-9206-5CD92461E3DC", GroupName = "Hospitality")]
    public class HBGHotelContainerBaseBlock : HBGBaseBlock
    {
        [Display(Name = "Address", GroupName = "Content", Order = 50)]
        [CultureSpecific]
        public virtual string Address { get; set; }

        [Display(Name = "Phone Number", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string PhoneNumber { get; set; }

        [Display(Name = "Email Address", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        public virtual LinkItem EmailAddress { get; set; }

        [Display(Name = "Map URL", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        public virtual LinkItem MapURL { get; set; }

    }
}
