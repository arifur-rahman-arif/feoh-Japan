using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Find.Helpers;
using EPiServer.Shell.Web;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using FEO.CMS.HBG.Core.Helper;
using System.ComponentModel.DataAnnotations;
using System.Globalization;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGDealPage", GUID = "79518F36-E0FE-4A3B-9B8A-CFB1D2763C58", GroupName = "Hospitality")]
    public class HBGDealPage : HBGBasePage
    {
        [Display(Name = "Child Deals", GroupName = "Profile", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea ChildDeals { get; set; }

        [Display(Name = "Generic Terms and Conditions", GroupName = "Profile", Order = 150)]
        [CultureSpecific]
        public virtual bool GenericTermsandConditions { get; set; }

        [Display(Name = "Participating Listings", GroupName = "Profile", Order = 200)]
        [CultureSpecific]
        public virtual ContentArea ParticipatingListings { get; set; }

        [Display(Name = "Terms Conditions Title", GroupName = "Profile", Order = 200)]
        [CultureSpecific]
        public virtual string TermsConditionsTitle { get; set; }

        [Display(Name = "Terms Conditions Content", GroupName = "Profile", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString TermsConditionsContent { get; set; }

        [Display(Name = "Discount Code", GroupName = "Profile", Order = 400)]
        [CultureSpecific]
        public virtual string DiscountCode { get; set; }

        [Display(Name = "Validity Message", GroupName = "Profile", Order = 500)]
        [CultureSpecific]
        public virtual string ValidityMessage { get; set; }

        [Display(Name = "Featuring Properties Message", GroupName = "Profile", Order = 600)]
        [CultureSpecific]
        public virtual string FeaturingPropertiesMessage { get; set; }

        [Display(Name = "Carousel", GroupName = "Profile", Order = 700)]
        [CultureSpecific]
        public virtual ContentReference carousel { get; set; }

        //DetailsBlock
        [Display(Name = "Short Summary", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        public virtual string ShortSummary { get; set; }

        //DealPreviewBlock
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
        public virtual ContentReference Category1 { get; set; }

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

        //NavigationItemBlock
        [Display(Name = "Link Title", GroupName = "SEO", Order = 100)]
        [CultureSpecific]
        public virtual string LinkTitle { get; set; }

        [Display(Name = "Menu Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference MenuImage { get; set; }

        //StaticListingBlock
        [Display(Name = "Listing Title", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string ListingTitle { get; set; }

        [Display(Name = "Listing Summary", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual XhtmlString ListingSummary { get; set; }

        //SentosaThumbnailBlock
        [Display(Name = "Deal Listing Thumbnail", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference DealListingThumbnail { get; set; }

        [Display(Name = "Static Deal Thumbnail", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference StaticDealThumbnail { get; set; }

        //RichContentPage
        [Display(Name = "Main Content", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString MainContent { get; set; }

        [Display(Name = "Title Content Override", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString TitleContentOverride { get; set; }

        [Display(Name = "Form Title", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual string FormTitle { get; set; }

        [Display(Name = "Location", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual ContentReference Location { get; set; }

        //MemberRelatedBlock
        [Display(Name = "Show Member Message", GroupName = "Member Related Text", Order = 100)]
        [CultureSpecific]
        public virtual bool ShowMemberMessage { get; set; }

        [Display(Name = "Member Message", GroupName = "Member Related Text", Order = 200)]
        [CultureSpecific]
        public virtual ContentReference MemberMessage { get; set; }
        public string GetBookDate()
        {
            string bookDate = string.Empty;
            string culture = CultureInfo.CurrentCulture.Name;
            if (StartDate == DateTime.MinValue && EndDate == DateTime.MinValue)
                return bookDate;

            if (StartDate != DateTime.MinValue)
                bookDate = DateTimeExtensionHelper.GetLocalizedLongDateWithFormat(StartDate, culture);

            if (StartDate != DateTime.MinValue && EndDate != DateTime.MinValue)
                bookDate = $"{bookDate} - {DateTimeExtensionHelper.GetLocalizedLongDateWithFormat(EndDate, culture)}";
            else if (StartDate == DateTime.MinValue && EndDate != DateTime.MinValue)
                bookDate = DateTimeExtensionHelper.GetLocalizedLongDateWithFormat(EndDate, culture);

            return bookDate;
        }
        public string GetStayDate()
        {
            string stayDate = string.Empty;
            string culture =CultureInfo.CurrentCulture.Name;
            if (StayStartDate == DateTime.MinValue && StayEndDate == DateTime.MinValue)
                return stayDate;

            if (StayStartDate != DateTime.MinValue)
                stayDate = DateTimeExtensionHelper.GetLocalizedLongDateWithFormat(StayStartDate, culture);

            if (StayStartDate != DateTime.MinValue && StayEndDate != DateTime.MinValue)
                stayDate = $"{stayDate} - {DateTimeExtensionHelper.GetLocalizedLongDateWithFormat(StayEndDate, culture)}";
            else if (StayStartDate == DateTime.MinValue && StayEndDate != DateTime.MinValue)
                stayDate = DateTimeExtensionHelper.GetLocalizedLongDateWithFormat(StayEndDate, culture);

            return stayDate;
        }
        public int GetParticipantCount()
        {
            if (ParticipatingListings == null)
                return 0;
            return ParticipatingListings.Items.Count();
        }
    }
}

