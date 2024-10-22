using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGParticipantListingItemBlock", GUID = "E306B63E-0568-45B4-A744-E7D0B4090C03", GroupName = "Hospitality")]
    public class HBGParticipantListingItemBlock : HBGBaseBlock
    {
        [Display(Name = "Parameters", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual string Parameters { get; set; }

        [Display(Name = "Redirect URL", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual LinkItem RedirectURL { get; set; }

        [Display(Name = "First Label", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        public virtual string FirstLabel { get; set; }

        [Display(Name = "First Label Value", GroupName = SystemTabNames.Content, Order = 700)]
        [CultureSpecific]
        public virtual string FirstLabelValue { get; set; }

        [Display(Name = "First Label Icon", GroupName = SystemTabNames.Content, Order = 800)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference FirstLabelIcon { get; set; }

        [Display(Name = "Second Label", GroupName = SystemTabNames.Content, Order = 900)]
        [CultureSpecific]
        public virtual string SecondLabel { get; set; }

        [Display(Name = "Second Label Value", GroupName = SystemTabNames.Content, Order = 950)]
        [CultureSpecific]
        public virtual string SecondLabelValue { get; set; }

        [Display(Name = "Second Label Icon", GroupName = SystemTabNames.Content, Order = 975)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference SecondLabelIcon { get; set; }

        [Display(Name = "Third Label", GroupName = SystemTabNames.Content, Order = 1000)]
        [CultureSpecific]
        public virtual string ThirdLabel { get; set; }

        [Display(Name = "Third Label Value", GroupName = SystemTabNames.Content, Order = 1200)]
        [CultureSpecific]
        public virtual string ThirdLabelValue { get; set; }

        [Display(Name = "Third Label Icon", GroupName = SystemTabNames.Content, Order = 1250)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ThirdLabelIcon { get; set; }

        [Display(Name = "Special Offer Description", GroupName = SystemTabNames.Content, Order = 1300)]
        [CultureSpecific]
        public virtual string SpecialOfferDescription { get; set; }

        [Display(Name = "Special Offer Icon", GroupName = SystemTabNames.Content, Order = 1400)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference SpecialOfferIcon { get; set; }

        [Display(Name = "Property", GroupName = SystemTabNames.Content, Order = 1500)]
        [CultureSpecific]
        public virtual ContentReference Property { get; set; }

        [Display(Name = "Preview Images", GroupName = SystemTabNames.Content, Order = 1600)]
        [CultureSpecific]
        public virtual string PreviewImages { get; set; }

        [Display(Name = "Ribbon Text", GroupName = SystemTabNames.Content, Order = 1700)]
        [CultureSpecific]
        public virtual string RibbonText { get; set; }

    }
}
