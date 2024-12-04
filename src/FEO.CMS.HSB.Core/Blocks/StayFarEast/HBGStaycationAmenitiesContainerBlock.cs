using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationAmenitiesContainerBlock", GUID = "2026F537-08D7-4B1E-B602-9CAA9B95F43F", GroupName = "Hospitality")]
    public class HBGStaycationAmenitiesContainerBlock : HBGStaycationAmenitiesContainerConfigBlock
    {
        [Display(Name = "AllAmenities", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [AllowedTypes(AllowedTypes = new[] { typeof(HBGStaycationAmenityBlock) })]
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

        [Display(Name = "Layout Options", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        public virtual ContentArea LayoutOptions { get; set; }

        [Display(Name = "Default Layout", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        public virtual ContentReference DefaultLayout { get; set; }

        [Display(Name = "BladeID", GroupName = SystemTabNames.Content, Order = 700)]
        [CultureSpecific]
        public virtual string BladeID { get; set; }

    }
}
