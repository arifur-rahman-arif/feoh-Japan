using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGListingPage", GUID = "4580E0BC-9A32-429D-B743-360C678B3718", GroupName = "Hospitality")]
    public class HBGListingPage : HBGBasePage
    {
        [Display(Name = "Contact Number", GroupName = "Profile", Order = 100)]
        [CultureSpecific]
        public virtual string ContactNumber { get; set; }

        [Display(Name = "Latitude", GroupName = "Map", Order = 100)]
        [CultureSpecific]
        public virtual double Latitude { get; set; }

        [Display(Name = "Logo", GroupName = "Trip Advisor", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Logo { get; set; }

        [Display(Name = "Logo Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LogoImage { get; set; }

        [Display(Name = "Main Content", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString MainContent { get; set; }

        [Display(Name = "Email Address", GroupName = "Profile", Order = 200)]
        [CultureSpecific]
        public virtual LinkItem EmailAddress { get; set; }

        [Display(Name = "Gallery Image", GroupName = "Gallery", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference GalleryImage { get; set; }

        [Display(Name = "Longitude", GroupName = "Map", Order = 200)]
        [CultureSpecific]
        public virtual double Longitude { get; set; }

        [Display(Name = "Rating", GroupName = "Trip Advisor", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Rating { get; set; }

        [Display(Name = "Recognition Image", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference RecognitionImage { get; set; }

        [Display(Name = "Services", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        public virtual ContentArea Services { get; set; }

        [Display(Name = "Gallery Caption", GroupName = "Gallery", Order = 300)]
        [CultureSpecific]
        public virtual string GalleryCaption { get; set; }

        [Display(Name = "Reviews Link", GroupName = "Trip Advisor", Order = 300)]
        [CultureSpecific]
        public virtual LinkItem ReviewsLink { get; set; }

        [Display(Name = "Trip Advisor Widget", GroupName = "Trip Advisor", Order = 300)]
        [CultureSpecific]
        public virtual LinkItem TripAdvisorWidget { get; set; }

        [Display(Name = "Hotel Amenities", GroupName = "Trip Advisor", Order = 400)]
        [CultureSpecific]
        public virtual ContentArea HotelAmenities { get; set; }

        [Display(Name = "Ribbon", GroupName = "Profile", Order = 1000)]
        [CultureSpecific]
        public virtual string Ribbon { get; set; }
        [Ignore]
        public virtual HBGCountryBlock Country { get; set; }
        [Ignore]
        public virtual string MinNightsText { get; set; }
        [Ignore]
        public virtual int MinNights { get; set; }
    }
}
