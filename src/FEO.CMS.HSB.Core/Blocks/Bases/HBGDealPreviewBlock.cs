using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGDealPreviewBlock", GUID = "862F97BA-3B7E-4E79-A82D-3257829BBDC5", GroupName = "Hospitality")]
    public class HBGDealPreviewBlock : HBGThumbnailPreviewBlock
    {
        [Display(Name = "Enable Promo Booking", GroupName = "Settings", Order = -50)]
        [CultureSpecific]
        public virtual bool EnablePromoBooking { get; set; }

        [Display(Name = "Enable Countdown Time", GroupName = "Countdown Time Settings", Order = 12)]
        [CultureSpecific]
        public virtual bool EnableCountdownTime { get; set; }

        [Display(Name = "DealDescription", GroupName = "Basic Info", Order = 25)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString DealDescription { get; set; }

        [Display(Name = "Book Start Date", GroupName = "Settings", Order = 50)]
        [CultureSpecific]
        public virtual DateTime StartDate { get; set; }

        [Display(Name = "ShowLearnMore", GroupName = "Basic Info", Order = 75)]
        [CultureSpecific]
        public virtual bool ShowLearnMore { get; set; }

        [Display(Name = "Category", GroupName = "Profile", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Category { get; set; }

        [Display(Name = "Book End Date", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual DateTime EndDate { get; set; }

        [Display(Name = "Multi-Media Carousel Position", GroupName = "Multi Media Carousel", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Position { get; set; }

        [Display(Name = "Short Description", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString ShortDescription { get; set; }

        [Display(Name = "Icon", GroupName = "Countdown Time Settings", Order = 112)]
        [CultureSpecific]
        public virtual ContentReference Icon { get; set; }

        [Display(Name = "Stay Start Date", GroupName = "Settings", Order = 150)]
        [CultureSpecific]
        public virtual DateTime StayStartDate { get; set; }

        [Display(Name = "Stay End Date", GroupName = "Settings", Order = 175)]
        [CultureSpecific]
        public virtual DateTime StayEndDate { get; set; }

        [Display(Name = "Deal Promo Date", GroupName = "Basic Info", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString DealPromoDate { get; set; }

        [Display(Name = "Parameters", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual string Parameters { get; set; }

        [Display(Name = "Priority", GroupName = "Profile", Order = 200)]
        [CultureSpecific]
        public virtual bool Priority { get; set; }

        [Display(Name = "Ribbon Color", GroupName = "Countdown Time Settings", Order = 212)]
        [CultureSpecific]
        public virtual ContentReference RibbonColor { get; set; }

        [Display(Name = "Private", GroupName = "Settings", Order = 300)]
        [CultureSpecific]
        public virtual bool Private { get; set; }

        [Display(Name = "Travel Types", GroupName = "Profile", Order = 300)]
        [CultureSpecific]
        public virtual ContentArea TravelTypes { get; set; }

        [Display(Name = "Deal Countdown Message", GroupName = "Countdown Time Settings", Order = 312)]
        [CultureSpecific]
        public virtual string DealCountdownMessage { get; set; }

        [Display(Name = "Redirect URL", GroupName = "Settings", Order = 400)]
        [CultureSpecific]
        public virtual LinkItem RedirectURL { get; set; }

        [Display(Name = "Deal Expired Message", GroupName = "Countdown Time Settings", Order = 412)]
        [CultureSpecific]
        public virtual string DealExpiredMessage { get; set; }

        [Display(Name = "Deal Tag", GroupName = "Profile", Order = 500)]
        [CultureSpecific]
        public virtual ContentReference DealTag { get; set; }

    }
}
