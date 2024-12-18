using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGPropertyListingResultsBlock", GUID = "706CB068-199C-485D-AF52-F2A35442E873", GroupName = "Hospitality")]
    public class HBGPropertyListingResultsBlock : HBGBaseBlock
    {
        [Display(Name = "Property Listing", GroupName = "Data", Order = 50)]
        [CultureSpecific]
        public virtual ContentArea PropertyListing { get; set; }

        [Display(Name = "Default Sort Filter", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference DefaultSortFilter { get; set; }

        [Display(Name = "Heading Title", GroupName = "Heading", Order = 100)]
        [CultureSpecific]
        public virtual string HeadingTitle { get; set; }

        [Display(Name = "Recommend In Sort", GroupName = "Data", Order = 150)]
        [CultureSpecific]
        public virtual ContentArea RecommendInSort { get; set; }

        [Display(Name = "Heading Description", GroupName = "Heading", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString HeadingDescription { get; set; }

        [Display(Name = "Price Min", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual double PriceMin { get; set; }

        [Display(Name = "Price Max", GroupName = SystemTabNames.Settings, Order = 250)]
        [CultureSpecific]
        public virtual double PriceMax { get; set; }

        [Display(Name = "Hide Filter", GroupName = SystemTabNames.Settings, Order = 300)]
        [CultureSpecific]
        public virtual bool HideFilter { get; set; }

        [Display(Name = "Enable Submit Enquiry CTA", GroupName = SystemTabNames.Settings, Order = 400)]
        [CultureSpecific]
        public virtual bool EnableSubmitEnquiryCTA { get; set; }

        [Display(Name = "Submit Enquiry Link", GroupName = SystemTabNames.Settings, Order = 500)]
        [CultureSpecific]
        public virtual LinkItem SubmitEnquiryLink { get; set; }

        [Display(Name = "Use As Modal Button", GroupName = SystemTabNames.Settings, Order = 600)]
        [CultureSpecific]
        public virtual bool UseAsModalButton { get; set; }

        [Display(Name = "Submit Enquiry CTA Id", GroupName = SystemTabNames.Settings, Order = 700)]
        [CultureSpecific]
        public virtual string SubmitEnquiryCTAId { get; set; }

    }
}
