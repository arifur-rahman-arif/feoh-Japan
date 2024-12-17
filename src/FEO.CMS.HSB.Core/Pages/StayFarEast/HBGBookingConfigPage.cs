using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGBookingConfigPage", GUID = "7A26E118-A9E9-4AF7-B635-338FA0AAAD3D", GroupName = "Hospitality")]
    public class HBGBookingConfigPage
    {
        [Display(Name = "Hotel Code Field Name", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual string HotelCodeFieldName { get; set; }

        //HBGBookingBlock
        [Display(Name = "Rooms", GroupName = "Booking Config", Order = 50)]
        [CultureSpecific]
        public virtual string Rooms { get; set; }

        [Display(Name = "Adults", GroupName = "Booking Config", Order = 100)]
        [CultureSpecific]
        public virtual string Adults { get; set; }

        [Display(Name = "Deal Booking URL", GroupName = "Deal Booking Config", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem DealBookingURL { get; set; }

        [Display(Name = "Children", GroupName = "Booking Config", Order = 200)]
        [CultureSpecific]
        public virtual string Children { get; set; }

        [Display(Name = "Adults Dropdown Label", GroupName = "Booking Config", Order = 300)]
        [CultureSpecific]
        public virtual string AdultsDropdownLabel { get; set; }

        [Display(Name = "Children Dropdown Label", GroupName = "Booking Config", Order = 400)]
        [CultureSpecific]
        public virtual string ChildrenDropdownLabel { get; set; }

        [Display(Name = "Maximum Number Of Rooms", GroupName = "Booking Config", Order = 450)]
        [CultureSpecific]
        public virtual double MaximumNumberOfRooms { get; set; }

        [Display(Name = "Default Number of Adults", GroupName = "Booking Config", Order = 500)]
        [CultureSpecific]
        public virtual double DefaultNumberofAdults { get; set; }

        [Display(Name = "Default Number of Children", GroupName = "Booking Config", Order = 600)]
        [CultureSpecific]
        public virtual double DefaultNumberofChildren { get; set; }

        [Display(Name = "Reservations Link", GroupName = "Booking Config", Order = 700)]
        [CultureSpecific]
        public virtual LinkItem ReservationsLink { get; set; }

        [Display(Name = "Property Listing Page", GroupName = "Booking Config", Order = 800)]
        [CultureSpecific]
        public virtual LinkItem PropertyListingPage { get; set; }

        [Display(Name = "Maximum Number Of Adults", GroupName = "Booking Config", Order = 900)]
        [CultureSpecific]
        public virtual double MaximumNumberOfAdults { get; set; }

        [Display(Name = "Maximum Number Of Children", GroupName = "Booking Config", Order = 1000)]
        [CultureSpecific]
        public virtual double MaximumNumberOfChildren { get; set; }

        //HBGBookingEngineMappingBlock
        [Display(Name = "BookingMapping", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual string BookingMapping { get; set; }

        //HBGDayInAdvanceBlock
        [Display(Name = "Number of Days in Advance", GroupName = "Booking Config", Order = 600)]
        [CultureSpecific]
        public virtual double NumberofDaysinAdvance { get; set; }
    }
}
