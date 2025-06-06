using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationPOIContainerBlock", GUID = "40F5DBAF-CA4E-4A54-A588-AF89D73F91D1", GroupName = "Hospitality")]
    public class HBGStaycationPOIContainerBlock : HBGBaseBlock
    {
        [Display(Name = "All Amenities", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference AllAmenities { get; set; }

        [Display(Name = "FeaturedAmenities", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea FeaturedAmenities { get; set; }

        [Display(Name = "Blade Icon", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BladeIcon { get; set; }

        [Display(Name = "Amenities Primary Title", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual string AmenitiesPrimaryTitle { get; set; }

        [Display(Name = "Amenities Description", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString AmenitiesDescription { get; set; }

        [Display(Name = "BladeID", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        public virtual string BladeID { get; set; }

    }
}
