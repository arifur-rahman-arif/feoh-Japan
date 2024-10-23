using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGVenuePage", GUID = "D96CA44E-8720-473D-8723-071D26D58030", GroupName = "Hospitality")]
    public class HBGVenuePage : HBGBasePage
    {
        [Display(Name = "", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Capacity { get; set; }

        [Display(Name = "Hotel", GroupName = "Filter", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Hotel { get; set; }

        [Display(Name = "Size", GroupName = "Filter", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Size { get; set; }

        [Display(Name = "PhoneNumber", GroupName = "Filter", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString PhoneNumber { get; set; }

        [Display(Name = "EmailAddress", GroupName = "Filter", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString EmailAddress { get; set; }

        [Display(Name = "VenueBrochure", GroupName = "Filter", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.MediaFile)]
        public virtual ContentReference VenueBrochure { get; set; }

        [Display(Name = "VenueFloorPlan", GroupName = "Filter", Order = 600)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference VenueFloorPlan { get; set; }

        [Display(Name = "VenueFloorPlanPDF", GroupName = "Filter", Order = 700)]
        [CultureSpecific]
        [UIHint(UIHint.MediaFile)]
        public virtual ContentReference VenueFloorPlanPDF { get; set; }

        [Display(Name = "VenueInformation", GroupName = "Filter", Order = 800)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString VenueInformation { get; set; }

        [Display(Name = "TestimonialsTitle", GroupName = "Filter", Order = 900)]
        [CultureSpecific]
        public virtual string TestimonialsTitle { get; set; }

        [Display(Name = "TestimonialsDescription", GroupName = "Filter", Order = 1000)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString TestimonialsDescription { get; set; }

        [Display(Name = "Find out More", GroupName = "Filter", Order = 1100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString FindoutMore { get; set; }

    }
}
