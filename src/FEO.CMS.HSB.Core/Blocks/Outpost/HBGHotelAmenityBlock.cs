using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGHotelAmenityBlock", GUID = "C0284864-5991-4DF6-854B-2D7D4A7286C3", GroupName = "Hospitality")]
    public class HBGHotelAmenityBlock : HBGBaseBlock
    {
        [Display(Name = "Amenities", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Amenities { get; set; }

    }
}
