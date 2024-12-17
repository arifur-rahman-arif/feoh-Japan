using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGAmenitiesContainerBlock", GUID = "FC8CB9EE-469C-4C13-86C5-2B913CA08D80", GroupName = "Hospitality")]
    public class HBGAmenitiesContainerBlock : HBGAmenitiesContainerConfigBlock
    {
        [Display(Name = "Featured Amenities", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea FeaturedAmenities { get; set; }

        [Display(Name = "All Amenities", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual ContentReference AllAmenities { get; set; }
    }
}
