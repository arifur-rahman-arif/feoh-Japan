using EPiServer.Core;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Models
{
    public class HeaderNavViewModel
    {
        // Logo
        public virtual ContentReference LogoImage { get; set; }
        public virtual ContentReference LogoImageForMobile { get; set; }
        public virtual ContentReference BackgroundImageForHamburgerMenu { get; set; }
        public virtual LinkItem LogoUrl { get; set; }

        // Menu
        public virtual LinkItem HotelsLink { get; set; }
        public virtual LinkItem DealsLink { get; set; }

        public virtual LinkItem ServicedResidencesLink { get; set; }

        public virtual LinkItem SubscribeLink { get; set; }
        //public virtual IEnumerable<SocialShareItem> SocialShareList { get; set; }
        //public virtual IEnumerable<INavigationItem> MenuItems { get; set; }

        public virtual LinkItem OasiaExperience { get; set; }
        public virtual LinkItem OasiaEvents { get; set; }
        //public virtual IEnumerable<INavigationItem> OasiaEventItems { get; set; }
        //// Unmapped properties
        //public SfeBookingConfig SfeBookingConfig { get; set; }
        //public IEnumerable<Currency> Currencies { get; set; }
        //public IEnumerable<SiteLanguage> Languages { get; set; }
        //public Announcement Announcement { get; set; }
        //public bool HasAnnouncement
        //{
        //    get
        //    {
        //        return Announcement != null;
        //    }
        //}
        //public PromotionBar PromotionBar { get; set; }
        //public bool HasPromotionBar
        //{
        //    get
        //    {
        //        return PromotionBar != null;
        //    }
        //}

        //public List<HeaderLanguage> HeaderLanguagesList { get; set; }

        //public string sfelanguage { get; set; }

        //public IEnumerable<Menu> Menus { get; set; }

        //public IEnumerable<Menu> Columns { get; set; }
        //public IEnumerable<Menu> PrimaryColumns { get; set; }
        //public IEnumerable<Menu> ExtensionColumns { get; set; }

        //public IEnumerable<NameValuePair> SubNavigation { get; set; }

        public bool IsMobileView { get; set; }

        public virtual LinkItem FootNotesLink { get; set; }
        public virtual ContentReference FootNotesImage { get; set; }
        public virtual string FootNotesDescription { get; set; }
        public virtual string FootNotesHeading { get; set; }

        //unmapped properties
        //public List<NameValuePair> NoOfGuest { get; set; }
        //public List<NameValuePair> NoOfChildren { get; set; }

        //public IBookingWidgetData BookingWidgetData { get; set; }

        //public VillageBookingConfig VillageBookingConfig { get; set; }

        //public BookingWidgetValidation ValidationMessage { get; set; }
        public virtual string LeftComponentTitle { get; set; }
        public virtual string LeftComponentSubTitle { get; set; }
        public virtual string RightComponentTitle { get; set; }
        public virtual string RightComponentSubTitle { get; set; }
        //public virtual IEnumerable<FeedBackComponent> PromotionBlades { get; set; }
        //public virtual IEnumerable<SubColumnMenuLinks> NavDropdown { get; set; }
        public virtual LinkItem ForgotPasswordLink { get; set; }
        public virtual LinkItem SignUpLink { get; set; }
        public virtual LinkItem SignInPopUpLink { get; set; }
        public virtual string SignOutLink { get; set; }
        public virtual bool ShowSignIn { get; set; }
        public virtual string SignInSignUpText { get; set; }

        //    public Link SignUpLink { get; set; }
        public string TextMessage { get; set; }
        public string SignInTextMessage { get; set; }
        public virtual bool DisplayPopUpAfterSignIn { get; set; }
        public string DelayTime { get; set; }
        public string SignInDelayTime { get; set; }
        public string TimeOnPage { get; set; }
        public string SignInTimeOnPage { get; set; }
        public string DisplayPopUpAgainAfter { get; set; }
        public string SignInDisplayPopUpAgainAfter { get; set; }
        public bool ShowSignUp { get; set; }
        public string ChainID { get; set; }
        public string BackButtonText { get; set; }
        public string LpoTitle { get; set; }
        public string LpoDescription { get; set; }
        public ContentReference LpoImage { get; set; }
        public virtual LinkItem LpoUrl { get; set; }
        public string MobileLoginText { get; set; }
        public string AutoCloseTime { get; set; }
        // Header Ribbon
        public virtual string RibbonPromo { get; set; }
        public virtual string LearnMore { get; set; }
        public virtual string RibbonPromoMobile { get; set; }
        public virtual string RibbonInnerPromo { get; set; }
        public virtual string RibbonInnerContent { get; set; }
        public virtual LinkItem RibbonSignUpLink { get; set; }
        public virtual string RibbonSignUpText { get; set; }
        public virtual ContentReference RibbonLogoImage { get; set; }
        public virtual LinkItem RibbonLogoUrl { get; set; }
        public virtual bool HideHeaderRibbon { get; set; }
        //public virtual GenericPopup GenericPopup { get; set; }

        //Signin Modal GRecaptcha
        public bool ShowSignInCaptcha { get; set; }
        public string CaptchaTitle { get; set; }
        public string CaptchaErrorMessage { get; set; }

        //Popup setting
        public bool ShouldDisplayPopupAfterLogin { get; set; }
        public bool ShouldDisplaySignUpPopup { get; set; }
    }
}
