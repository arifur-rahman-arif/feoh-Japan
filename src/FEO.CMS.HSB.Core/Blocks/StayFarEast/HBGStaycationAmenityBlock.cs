using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationAmenityBlock", GUID = "C4A763CF-9F60-4A90-85C8-1602E33FA306", GroupName = "Hospitality")]
    public class HBGStaycationAmenityBlock : HBGBaseBlock
    {
        [Display(Name = "Amenities Banner", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference AmenitiesBanner { get; set; }

        [Display(Name = "Amenities Name", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string AmenitiesName { get; set; }

        [Display(Name = "Amenities Description", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString AmenitiesDescription { get; set; }

        [Display(Name = "Amenities Blurb", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual string AmenitiesBlurb { get; set; }

    }
}
