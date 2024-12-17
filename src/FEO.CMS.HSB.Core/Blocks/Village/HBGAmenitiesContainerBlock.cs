using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGAmenitiesContainerBlock", GUID = "45E079BF-2F64-46A1-A67C-B253BBD0F23A", GroupName = "Hospitality")]
    public class HBGAmenitiesContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Featured Amenities", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea FeaturedAmenities { get; set; }

        [Display(Name = "OtherAmenities", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual string OtherAmenities { get; set; }

        [Display(Name = "SeeAll", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual LinkItem SeeAll { get; set; }

    }
}
