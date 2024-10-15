using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGListingPreviewBlock", GUID = "E74B8E6A-9F9B-47DD-84AD-31A975FE4EA7", GroupName = "Hospitality")]
    public class HBGListingPreviewBlock : HBGBaseBlock
    {
        [Display(Name = "Area", GroupName = "Profile", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Area { get; set; }

        [Display(Name = "External URL", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem ExternalURL { get; set; }

        [Display(Name = "Preview Images", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        public virtual string PreviewImages { get; set; }

        [Display(Name = "Rate", GroupName = "Rates", Order = 100)]
        [CultureSpecific]
        public virtual string Rate { get; set; }

        [Display(Name = "Trip Advisor Reviews", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual XhtmlString TripAdvisorReviews { get; set; }

        [Display(Name = "Brand", GroupName = "Profile", Order = 200)]
        [CultureSpecific]
        public virtual ContentReference Brand { get; set; }

        [Display(Name = "Enable Enquire Monthly Rates CTA", GroupName = "Rates", Order = 200)]
        [CultureSpecific]
        public virtual bool EnableMonthRatesCTA { get; set; }

        [Display(Name = "Map URL", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual LinkItem MapURL { get; set; }

        [Display(Name = "Category", GroupName = "Profile", Order = 300)]
        [CultureSpecific]
        public virtual string Category { get; set; }

        [Display(Name = "Hotel Id", GroupName = "Settings", Order = 300)]
        [CultureSpecific]
        public virtual string HotelId { get; set; }

        [Display(Name = "City", GroupName = "Profile", Order = 400)]
        [CultureSpecific]
        public virtual ContentReference City { get; set; }

        [Display(Name = "Country", GroupName = "Profile", Order = 500)]
        [CultureSpecific]
        public virtual ContentReference Country { get; set; }

        [Display(Name = "Distance", GroupName = "Profile", Order = 600)]
        [CultureSpecific]
        public virtual string Distance { get; set; }

        [Display(Name = "Full Address", GroupName = "Profile", Order = 700)]
        [CultureSpecific]
        public virtual string FullAddress { get; set; }

        [Display(Name = "Type", GroupName = "Profile", Order = 800)]
        [CultureSpecific]
        public virtual ContentReference Type { get; set; }

        [Display(Name = "Phone Number", GroupName = "Profile", Order = 900)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString PhoneNumber { get; set; }

        [Display(Name = "Hotel Contact Number", GroupName = "Profile", Order = 1000)]
        [CultureSpecific]
        public virtual string HotelContactNumber { get; set; }

        [Display(Name = "Reservations Contact Number", GroupName = "Profile", Order = 1100)]
        [CultureSpecific]
        public virtual string ReservationsContactNumber { get; set; }

        [Display(Name = "Customisable Labels", GroupName = "Profile", Order = 1200)]
        [CultureSpecific]
        public virtual ContentArea CustomisableLabels { get; set; }

        [Display(Name = "Price", GroupName = "Profile", Order = 1300)]
        [CultureSpecific]
        public virtual double Price { get; set; }

        [Display(Name = "Recommend", GroupName = "Profile", Order = 1400)]
        [CultureSpecific]
        public virtual bool Recommend { get; set; }

    }
}
