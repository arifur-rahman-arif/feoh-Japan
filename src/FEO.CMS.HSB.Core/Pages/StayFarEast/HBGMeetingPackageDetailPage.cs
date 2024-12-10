using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGMeetingPackageDetailPage", GUID = "4A878DA4-AC71-490E-9F92-ED6291460A87", GroupName = "Hospitality")]
    public class HBGMeetingPackageDetailPage : HBGBasePage
    {
        [Display(Name = "Display Get In Touch", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        [AllowedTypes(AllowedTypes = new[] { typeof(HBGNameValuePairBlock) })]
        public virtual ContentReference DisplayGetInTouch { get; set; }

        [Display(Name = "Package Overview", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString PackageOverview { get; set; }

        [Display(Name = "Package Includes", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString PackageIncludes { get; set; }

        [Display(Name = "Preview Images", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        public virtual string PreviewImages { get; set; }

        [Display(Name = "Gallery", GroupName = "Images", Order = 850)]
        [CultureSpecific]
        [AllowedTypes(AllowedTypes = new[] { typeof(HBGMultiMediaCarouselFolderBlock) })]
        public virtual ContentReference Gallery { get; set; }

        [Display(Name = "Brochure Download", GroupName = "Images", Order = 1000)]
        [CultureSpecific]
        public virtual LinkItem BrochureDownload { get; set; }

        [Display(Name = "Ribbon Text", GroupName = "Images", Order = 1100)]
        [CultureSpecific]
        public virtual string RibbonText { get; set; }

        [Display(Name = "Enable Enquiry CTA", GroupName = "Images", Order = 1200)]
        [CultureSpecific]
        public virtual bool EnableEnquiryCTA { get; set; }

        [Display(Name = "Term Condition Title", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string TermConditionTitle { get; set; }

        [Display(Name = "Term Condition Description", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString TermConditionDescription { get; set; }

        [Display(Name = "By Hotel", GroupName = "Filters", Order = 50)]
        [CultureSpecific]
        [AllowedTypes(AllowedTypes = new[] { typeof(HBGMeetingsHotelContainerPage) })]
        public virtual ContentArea ByHotel { get; set; }

        [Display(Name = "By Capacity", GroupName = "Filters", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea BySize { get; set; }

        [Display(Name = "By Room Setting", GroupName = "Filters", Order = 200)]
        [CultureSpecific]
        public virtual ContentArea ByRoomSetting { get; set; }


        [Display(Name = "Participating Venues", GroupName = "Related Venues", Order = 400)]
        [CultureSpecific]
        public virtual ContentArea ParticipatingVenues { get; set; }

        [Display(Name = "View All Venue URL", GroupName = "Related Venues", Order = 500)]
        [CultureSpecific]
        public virtual LinkItem ViewAllVenueURL { get; set; }
    }
}
