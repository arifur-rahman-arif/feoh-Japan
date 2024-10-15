using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.Outpost
{
    [ContentType(DisplayName = "HBGVenuePage", GUID = "2858202B-7824-4DD5-B31B-DE91EFBD2284", GroupName = "Hospitality")]
    public class HBGVenuePage : HBGBasePage
    {
        [Display(Name = "Enable Link", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual bool EnableLink { get; set; }

        [Display(Name = "Feature One", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        public virtual string FeatureOne { get; set; }

        [Display(Name = "Listing Desktop Image", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ListingDesktopImage { get; set; }

        [Display(Name = "Section One Title", GroupName = "Accordion", Order = 100)]
        [CultureSpecific]
        public virtual string SectionOneTitle { get; set; }

        [Display(Name = "Feature Two", GroupName = "Basic Info", Order = 200)]
        [CultureSpecific]
        public virtual string FeatureTwo { get; set; }

        [Display(Name = "Listing Mobile Image", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ListingMobileImage { get; set; }

        [Display(Name = "Section One SubTitle 1", GroupName = "Accordion", Order = 200)]
        [CultureSpecific]
        public virtual string SectionOneSubTitle1 { get; set; }

        [Display(Name = "Services", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual ContentArea Services { get; set; }

        [Display(Name = "Section One Description 1", GroupName = "Accordion", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString SectionOneDescription1 { get; set; }

        [Display(Name = "Section One SubTitle 2", GroupName = "Accordion", Order = 400)]
        [CultureSpecific]
        public virtual string SectionOneSubTitle2 { get; set; }

        [Display(Name = "Section One Description 2", GroupName = "Accordion", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString SectionOneDescription2 { get; set; }

        [Display(Name = "Section Two Title", GroupName = "Accordion", Order = 600)]
        [CultureSpecific]
        public virtual string SectionTwoTitle { get; set; }

        [Display(Name = "Section Two Description", GroupName = "Accordion", Order = 700)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString SectionTwoDescription { get; set; }

    }
}
