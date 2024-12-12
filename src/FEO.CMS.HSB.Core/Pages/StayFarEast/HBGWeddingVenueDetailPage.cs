using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGWeddingVenueDetailPage", GUID = "50E2E94F-0BD1-4604-B6E3-7E44248AA6F7", GroupName = "Hospitality")]
    public class HBGWeddingVenueDetailPage : HBGBasePage
    {
        [Display(Name = "Venue Location", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        public virtual string VenueLocation { get; set; }

        [Display(Name = "Venue Room Size", GroupName = SystemTabNames.Content, Order = 700)]
        [CultureSpecific]
        public virtual double VenueRoomSize { get; set; }

        [Display(Name = "Venue Room Features", GroupName = SystemTabNames.Content, Order = 800)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString VenueRoomFeatures { get; set; }

        [Display(Name = "Venue Floor Plan Image", GroupName = SystemTabNames.Content, Order = 900)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference VenueFloorPlanImage { get; set; }

        [Display(Name = "Venue Floor Plan File", GroupName = SystemTabNames.Content, Order = 950)]
        [CultureSpecific]
        public virtual LinkItem VenueFloorPlanFile { get; set; }

        [Display(Name = "Tour URL", GroupName = SystemTabNames.Content, Order = 1050)]
        [CultureSpecific]
        public virtual string TourURL { get; set; }

        [Display(Name = "Preview Images", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        public virtual string PreviewImages { get; set; }

        [Display(Name = "Gallery", GroupName = SystemTabNames.Content, Order = 850)]
        [CultureSpecific]
        [AllowedTypes(AllowedTypes = new[] { typeof(HBGMultiMediaCarouselFolderBlock) })]
        public virtual ContentReference Gallery { get; set; }

        [Display(Name = "Brochure Download", GroupName = SystemTabNames.Content, Order = 1000)]
        [CultureSpecific]
        public virtual LinkItem BrochureDownload { get; set; }

        [Display(Name = "Ribbon Text", GroupName = SystemTabNames.Content, Order = 1100)]
        [CultureSpecific]
        public virtual string RibbonText { get; set; }

        [Display(Name = "Enable Enquiry CTA", GroupName = SystemTabNames.Content, Order = 1200)]
        [CultureSpecific]
        public virtual bool EnableEnquiryCTA { get; set; }

        [Display(Name = "By Hotel", GroupName = "Filters", Order = 50)]
        [CultureSpecific]
        [AllowedTypes(AllowedTypes = new[] { typeof(HBGWeddingsHotelContainerPage) })]
        public virtual ContentArea ByHotel { get; set; }

        [Display(Name = "By Capacity", GroupName = "Filters", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea BySize { get; set; }

        [Display(Name = "By Room Setting", GroupName = "Filters", Order = 200)]
        [CultureSpecific]
        public virtual ContentArea ByRoomSetting { get; set; }

        [Display(Name = "Participating Packages", GroupName = "Related Packages", Order = 1100)]
        [CultureSpecific]
        public virtual ContentArea ParticipatingPackages { get; set; }

        [Display(Name = "View All Package URL", GroupName = "Related Packages", Order = 1200)]
        [CultureSpecific]
        public virtual LinkItem ViewAllPackageURL { get; set; }

        [Display(Name = "Venue Capacity Items", GroupName = "Content", Order = 850)]
        [CultureSpecific]
        public virtual ContentReference VenueCapacityItems { get; set; }

    }
}
