using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGWeddingPackageDetailPage", GUID = "210DF632-07F5-4BD8-981A-E8FC129ACCFC", GroupName = "Hospitality")]
    public class HBGWeddingPackageDetailPage : HBGBasePage
    {
        [Display(Name = "Display Get In Touch", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        [AllowedTypes(AllowedTypes = new[] { typeof(HBGNameValuePairBlock) })]
        public virtual ContentReference DisplayGetInTouch { get; set; }

        [Display(Name = "Package Overview", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString PackageOverview { get; set; }

        [Display(Name = "Package Includes", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString PackageIncludes { get; set; }

        [Display(Name = "Preview Images", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        public virtual string PreviewImages { get; set; }

        [Display(Name = "Gallery", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        [AllowedTypes(AllowedTypes = new[] { typeof(HBGMultiMediaCarouselFolderBlock) })]
        public virtual ContentReference Gallery { get; set; }

        [Display(Name = "Brochure Download", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        public virtual LinkItem BrochureDownload { get; set; }

        [Display(Name = "Ribbon Text", GroupName = SystemTabNames.Content, Order = 700)]
        [CultureSpecific]
        public virtual string RibbonText { get; set; }

        [Display(Name = "Enable Enquiry CTA", GroupName = SystemTabNames.Content, Order = 800)]
        [CultureSpecific]
        public virtual bool EnableEnquiryCTA { get; set; }

        [Display(Name = "Term Condition Title", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual string TermConditionTitle { get; set; }

        [Display(Name = "Term Condition Description", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString TermConditionDescription { get; set; }

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


        [Display(Name = "Participating Venues", GroupName = "Related Venues", Order = 400)]
        [CultureSpecific]
        public virtual ContentArea ParticipatingVenues { get; set; }

        [Display(Name = "View All Venue URL", GroupName = "Related Venues", Order = 500)]
        [CultureSpecific]
        public virtual LinkItem ViewAllVenueURL { get; set; }
    }
}
