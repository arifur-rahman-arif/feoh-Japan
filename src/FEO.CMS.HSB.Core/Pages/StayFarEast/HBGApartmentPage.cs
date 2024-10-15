using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGApartmentPage", GUID = "88169925-526E-4737-AABD-C237E69A63C1", GroupName = "Hospitality")]
    public class HBGApartmentPage : HBGBasePage
    {
        [Display(Name = "Assets Summary", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString AssetsSummary { get; set; }

        [Display(Name = "Floorplan Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference FloorplanImage { get; set; }

        [Display(Name = "Floor Plan", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.MediaFile)]
        public virtual ContentReference FloorPlan { get; set; }

        [Display(Name = "Main Content", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString MainContent { get; set; }

        [Display(Name = "Services", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        public virtual ContentArea Services { get; set; }

        [Display(Name = "Foot Notes", GroupName = "Content", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString FootNotes { get; set; }

        [Display(Name = "BookAtDailyRate", GroupName = "Content", Order = 600)]
        [CultureSpecific]
        public virtual LinkItem BookAtDailyRate { get; set; }

        [Display(Name = "EnquireForMonthlyRateCTA", GroupName = "Content", Order = 600)]
        [CultureSpecific]
        public virtual LinkItem EnquireForMonthlyRateCTA { get; set; }

    }
}
