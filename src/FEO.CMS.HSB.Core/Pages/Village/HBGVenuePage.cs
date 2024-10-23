using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.Village
{
    [ContentType(DisplayName = "HBGVenuePage", GUID = "62A63EAB-13B2-4570-81B0-AE13CF3790C9", GroupName = "Hospitality")]
    public class HBGVenuePage : HBGBasePage
    {
        [Display(Name = "Section One Title", GroupName = "Accordion", Order = 100)]
        [CultureSpecific]
        public virtual string SectionOneTitle { get; set; }

        [Display(Name = "See All", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual LinkItem SeeAll { get; set; }

        [Display(Name = "Thumbnail Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ThumbnailImage { get; set; }

        [Display(Name = "Feature One", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string FeatureOne { get; set; }

        [Display(Name = "Section One SubTitle 1", GroupName = "Accordion", Order = 200)]
        [CultureSpecific]
        public virtual string SectionOneSubTitle1 { get; set; }

        [Display(Name = "Section One Description 1", GroupName = "Accordion", Order = 250)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString SectionOneDescription1 { get; set; }

        [Display(Name = "Feature Two", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual string FeatureTwo { get; set; }

        [Display(Name = "Section One SubTitle 2", GroupName = "Accordion", Order = 300)]
        [CultureSpecific]
        public virtual string SectionOneSubTitle2 { get; set; }

        [Display(Name = "Feature Three", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual string FeatureThree { get; set; }

        [Display(Name = "Section One Description 2", GroupName = "Accordion", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString SectionOneDescription2 { get; set; }

        [Display(Name = "Section Two Title", GroupName = "Accordion", Order = 500)]
        [CultureSpecific]
        public virtual string SectionTwoTitle { get; set; }

        [Display(Name = "Capacity Range", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        public virtual ContentArea CapacityRange { get; set; }

        [Display(Name = "Section Two Description", GroupName = "Accordion", Order = 600)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString SectionTwoDescription { get; set; }

        [Display(Name = "Special Offer Description", GroupName = SystemTabNames.Content, Order = 700)]
        [CultureSpecific]
        public virtual string SpecialOfferDescription { get; set; }

        [Display(Name = "Special Offer Icon", GroupName = SystemTabNames.Content, Order = 800)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference SpecialOfferIcon { get; set; }

        [Display(Name = "Request Proposal", GroupName = SystemTabNames.Content, Order = 900)]
        [CultureSpecific]
        public virtual LinkItem RequestProposal { get; set; }

        [Display(Name = "Label List", GroupName = SystemTabNames.Content, Order = 1000)]
        [CultureSpecific]
        public virtual ContentArea LabelList { get; set; }

        [Display(Name = "Talk To Us Title", GroupName = SystemTabNames.Content, Order = 1100)]
        [CultureSpecific]
        public virtual string TalkToUsTitle { get; set; }

    }
}
