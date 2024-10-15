using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGListingBookingBlock", GUID = "85513DA3-5945-4A68-B2BF-38671442F7D2", GroupName = "Hospitality")]
    public class HBGListingBookingBlock : HBGBaseBlock
    {
        [Display(Name = "Booking Code", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual string BookingCode { get; set; }

        [Display(Name = "Booking Parameters", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual string BookingParameters { get; set; }

        [Display(Name = "Booking Parameters For Mobile", GroupName = "Settings", Order = 300)]
        [CultureSpecific]
        public virtual string BookingParametersForMobile { get; set; }

        [Display(Name = "Booking URL", GroupName = "Settings", Order = 400)]
        [CultureSpecific]
        public virtual LinkItem BookingURL { get; set; }

        [Display(Name = "Booking URL For Mobile", GroupName = "Settings", Order = 500)]
        [CultureSpecific]
        public virtual LinkItem BookingURLForMobile { get; set; }

        [Display(Name = "SS Booking URL", GroupName = "Settings", Order = 550)]
        [CultureSpecific]
        public virtual LinkItem SSBookingURL { get; set; }

        [Display(Name = "Minimum Nights", GroupName = "Settings", Order = 600)]
        [CultureSpecific]
        public virtual double MinimumNights { get; set; }

        [Display(Name = "Minimum Nights Text", GroupName = "Settings", Order = 700)]
        [CultureSpecific]
        public virtual string MinimumNightsText { get; set; }

        [Display(Name = "Maximum Number Of Pax", GroupName = "Settings", Order = 800)]
        [CultureSpecific]
        public virtual double MaximumNumberOfPax { get; set; }

        [Display(Name = "Minimum Number Of Adults", GroupName = "Settings", Order = 900)]
        [CultureSpecific]
        public virtual double MinimumNumberOfAdults { get; set; }

        [Display(Name = "Minimum Number Of Children", GroupName = "Settings", Order = 1000)]
        [CultureSpecific]
        public virtual double MinimumNumberOfChildren { get; set; }

        [Display(Name = "Per Night And Monthly Rate", GroupName = "Settings", Order = 1100)]
        [CultureSpecific]
        public virtual string PerNightAndMonthlyRate { get; set; }

        [Display(Name = "Property Note", GroupName = "Settings", Order = 1200)]
        [CultureSpecific]
        public virtual string PropertyNote { get; set; }

        [Display(Name = "Property Note Color", GroupName = "Settings", Order = 1300)]
        [CultureSpecific]
        public virtual string PropertyNoteColor { get; set; }

        [Display(Name = "Date Format", GroupName = "Settings", Order = 1400)]
        [CultureSpecific]
        public virtual string DateFormat { get; set; }

    }
}
