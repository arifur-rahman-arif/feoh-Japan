using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGHomePage", GUID = "EA854A69-FFFD-4A07-B178-7AEDFD14BC99", GroupName = "Hospitality",Description = "StayFarEast Home")]
    public class HBGHomePage : HBGBasePage
    {
        [Display(Name = "Caption", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string Caption { get; set; }

        [Display(Name = "Date Input Placeholder", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string DateInputPlaceholder { get; set; }

        [Display(Name = "Search Input Placeholder", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        public virtual string SearchInputPlaceholder { get; set; }

        [Display(Name = "Search Results URL", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        public virtual LinkItem SearchResultsURL { get; set; }

        [Display(Name = "Show All Link", GroupName = "Content", Order = 500)]
        [CultureSpecific]
        public virtual LinkItem ShowAllLink { get; set; }

        [Display(Name = "Welcome Text", GroupName = "Content", Order = 600)]
        [CultureSpecific]
        public virtual string WelcomeText { get; set; }

        [Display(Name = "Banner", GroupName = "Banner", Order = 300)]
        [CultureSpecific]
        public virtual ContentArea Banner { get; set; }

        [Display(Name = "Position Booking Widget", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference PositionBookingWidget { get; set; }

        [Display(Name = "Background Color", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual ContentReference BackgroundColor { get; set; }

        [Display(GroupName = SystemTabNames.Content, Name = "Banner Content Area", Description = "banner", Order = 100)]
        public virtual ContentArea BannerContentArea { get; set; }

        [Display(GroupName = SystemTabNames.Content, Name = "Booking Widget Content Area", Description = "booking-widget", Order = 100)]
        public virtual ContentArea BookingWidgetContentArea { get; set; }
    }
}
