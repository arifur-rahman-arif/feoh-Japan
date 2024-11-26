using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGHomePage", GUID = "EA854A69-FFFD-4A07-B178-7AEDFD14BC99", GroupName = "Hospitality")]
    public class HBGHomePage : HBGBasePage
    {
        [Display(Name = "Caption", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string Caption { get; set; }

        [Display(Name = "Date Input Placeholder", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string DateInputPlaceholder { get; set; }

        [Display(Name = "Search Input Placeholder", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual string SearchInputPlaceholder { get; set; }

        [Display(Name = "Search Results URL", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual LinkItem SearchResultsURL { get; set; }

        [Display(Name = "Show All Link", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        public virtual LinkItem ShowAllLink { get; set; }

        [Display(Name = "Welcome Text", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        public virtual string WelcomeText { get; set; }
        [Display(Name = "Open Graph Image", GroupName = "SEO", Order = 50)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference OpenGraphImage { get; set; }

        [Display(Name = "Open Graph Type", GroupName = "SEO", Order = 75)]
        [CultureSpecific]
        public virtual ContentReference OpenGraphType { get; set; }

        [Display(Name = "Body Class Name", GroupName = "UI", Order = 100)]
        [CultureSpecific]
        public virtual string BodyClassName { get; set; }

        [Display(Name = "First Publish Date", GroupName = "Publishing", Order = 100)]
        [CultureSpecific]
        public virtual DateTime FirstPublishDate { get; set; }

        [Display(Name = "Indexable", GroupName = "Indexing", Order = 100)]
        [CultureSpecific]
        public virtual bool Indexable { get; set; }

        [Display(Name = "IsAccountPage", GroupName = "PageType", Order = 100)]
        [CultureSpecific]
        public virtual bool IsAccountPage { get; set; }

        [Display(Name = "Meta Description", GroupName = "SEO", Order = 100)]
        [CultureSpecific]
        public virtual string MetaDescription { get; set; }

        [Display(Name = "Show In Breadcrumb", GroupName = "Navigation", Order = 100)]
        [CultureSpecific]
        public virtual bool ShowInBreadcrumb { get; set; }

        [Display(Name = "Last Publish Date", GroupName = "Publishing", Order = 200)]
        [CultureSpecific]
        public virtual DateTime LastPublishDate { get; set; }

        [Display(Name = "Meta Keywords", GroupName = "SEO", Order = 200)]
        [CultureSpecific]
        public virtual string MetaKeywords { get; set; }

        [Display(Name = "MetaTags", GroupName = "SEO", Order = 250)]
        [CultureSpecific]
        public virtual string MetaTags { get; set; }

        [Display(Name = "SubNav", GroupName = "Navigation", Order = 300)]
        [CultureSpecific]
        public virtual ContentArea SubNav { get; set; }

        [Display(Name = "Title Override", GroupName = "SEO", Order = 300)]
        [CultureSpecific]
        public virtual string TitleOverride { get; set; }

        [Display(Name = "H1 Tag", GroupName = "SEO", Order = 400)]
        [CultureSpecific]
        public virtual string H1Tag { get; set; }

        [Display(Name = "Canonical Url", GroupName = "SEO", Order = 500)]
        [CultureSpecific]
        public virtual string CanonicalUrl { get; set; }
        [Display(Name = "Description", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Description { get; set; }

        [Display(Name = "Summary", GroupName = "Basic Info", Order = 200)]
        [CultureSpecific]
        public virtual string Summary { get; set; }

        [Display(Name = "Title", GroupName = "Basic Info", Order = 300)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Please Select", GroupName = "Booking Widget Field Validation", Order = 100)]
        [CultureSpecific]
        public virtual string PleaseSelect { get; set; }

        //[Display(Name = "Property", GroupName = "Booking Widget Field Validation", Order = 200)]
        //[CultureSpecific]
        //public virtual string Property { get; set; }

        [Display(Name = "Check In Date", GroupName = "Booking Widget Field Validation", Order = 300)]
        [CultureSpecific]
        public virtual string CheckInDate { get; set; }

        [Display(Name = "Check Out Date", GroupName = "Booking Widget Field Validation", Order = 400)]
        [CultureSpecific]
        public virtual string CheckOutDate { get; set; }

        [Display(Name = "Banner", GroupName = "Banner", Order = 300)]
        [CultureSpecific]
        public virtual ContentArea Banner { get; set; }

        [Display(Name = "Position Booking Widget", GroupName = "Home Config", Order = 400)]
        [CultureSpecific]
        public virtual ContentReference PositionBookingWidget { get; set; }

        [Display(Name = "Background Color", GroupName = "Home Config", Order = 500)]
        [CultureSpecific]
        public virtual ContentReference BackgroundColor { get; set; }

        [Display(GroupName = SystemTabNames.Content, Name = "Banner Content Area", Description = "banner", Order = 100)]
        public virtual ContentArea BannerContentArea { get; set; }

        [Display(GroupName = SystemTabNames.Content, Name = "Booking Widget Content Area", Description = "booking-widget", Order = 100)]
        public virtual ContentArea BookingWidgetContentArea { get; set; }
    }
}
