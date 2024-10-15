using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGHotelAmenityItemBlock", GUID = "8A9B0B87-51EE-41B9-9137-D6C1A51E8531", GroupName = "Hospitality")]
    public class HBGHotelAmenityItemBlock : HBGBaseBlock
    {
        [Display(Name = "Amenity Name", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string AmenityName { get; set; }

    }
}
