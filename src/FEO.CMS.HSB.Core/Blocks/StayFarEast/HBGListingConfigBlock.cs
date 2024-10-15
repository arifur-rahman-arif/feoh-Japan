using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGListingConfigBlock", GUID = "2EF9D2D9-AB8F-48CA-89A4-B27D4EAB0561", GroupName = "Hospitality")]
    public class HBGListingConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Certificate Of Excellence Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference CertificateOfExcellenceImage { get; set; }

        [Display(Name = "Map URL", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem MapURL { get; set; }

        [Display(Name = "Facebook Button Icon", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference FacebookButtonIcon { get; set; }

        [Display(Name = "Max Number Of Deals Displayed", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual double MaxNumberOfDealsDisplayed { get; set; }

        [Display(Name = "Instagram Button Icon", GroupName = "Images", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference InstagramButtonIcon { get; set; }

        [Display(Name = "Location Marker Image", GroupName = "Images", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LocationMarkerImage { get; set; }

        [Display(Name = "Location Marker Image For Mobile", GroupName = "Images", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LocationMarkerImageForMobile { get; set; }

        [Display(Name = "Trip Advisor Icon", GroupName = "Images", Order = 600)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference TripAdvisorIcon { get; set; }

        [Display(Name = "Trip Advisor Logo", GroupName = "Images", Order = 700)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference TripAdvisorLogo { get; set; }

        [Display(Name = "Capacity Icon", GroupName = "Images", Order = 800)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference CapacityIcon { get; set; }

        [Display(Name = "Operating Hours Icon", GroupName = "Images", Order = 900)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference OperatingHoursIcon { get; set; }

        [Display(Name = "Phone Number Icon", GroupName = "Images", Order = 1000)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference PhoneNumberIcon { get; set; }

        [Display(Name = "Video Icon", GroupName = "Images", Order = 1100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference VideoIcon { get; set; }

    }
}
