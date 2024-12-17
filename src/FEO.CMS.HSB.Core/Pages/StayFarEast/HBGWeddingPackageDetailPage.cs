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

        [Display(Name = "Display Get In Touch", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        [AllowedTypes(AllowedTypes = new[] { typeof(HBGNameValuePairBlock) })]
        public virtual ContentReference DisplayGetInTouch { get; set; }

        [Display(Name = "Package Overview", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString PackageOverview { get; set; }

        [Display(Name = "Package Includes", GroupName = SystemTabNames.Settings, Order = 200)]
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

        [Display(Name = "Alternate URL", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual LinkItem AlternateURL { get; set; }

        [Display(Name = "Large Thumbnail", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LargeThumbnail { get; set; }

        [Display(Name = "Sub Title", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

        [Display(Name = "Medium Thumbnail", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference MediumThumbnail { get; set; }

        [Display(Name = "Small Thumbnail", GroupName = "Images", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference SmallThumbnail { get; set; }

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
