using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationPOIBlock", GUID = "8EEF3D22-9C97-4C9E-A7B8-BB892161C897", GroupName = "Hospitality")]
    public class HBGStaycationPOIBlock : HBGBaseBlock
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

        [Display(Name = "Amenities SubName", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        public virtual string AmenitiesSubName { get; set; }

    }
}
