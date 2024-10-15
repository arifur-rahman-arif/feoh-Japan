using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGDealPage", GUID = "79518F36-E0FE-4A3B-9B8A-CFB1D2763C58", GroupName = "Hospitality")]
    public class HBGDealPage : HBGBasePage
    {
        [Display(Name = "Child Deals", GroupName = "Profile", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea ChildDeals { get; set; }

        [Display(Name = "Generic Terms and Conditions", GroupName = "Content", Order = 150)]
        [CultureSpecific]
        public virtual bool GenericTermsandConditions { get; set; }

        [Display(Name = "", GroupName = "Profile", Order = 200)]
        [CultureSpecific]
        public virtual ContentArea ParticipatingListings { get; set; }

        [Display(Name = "Terms Conditions Title", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string TermsConditionsTitle { get; set; }

        [Display(Name = "Terms Conditions Content", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString TermsConditionsContent { get; set; }

        [Display(Name = "Discount Code", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        public virtual string DiscountCode { get; set; }

        [Display(Name = "Validity Message", GroupName = "Content", Order = 500)]
        [CultureSpecific]
        public virtual string ValidityMessage { get; set; }

        [Display(Name = "Featuring Properties Message", GroupName = "Content", Order = 600)]
        [CultureSpecific]
        public virtual string FeaturingPropertiesMessage { get; set; }

    }
}
