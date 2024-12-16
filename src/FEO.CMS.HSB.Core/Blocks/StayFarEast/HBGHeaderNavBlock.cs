using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using FEO.CMS.HBG.Core.Blocks.Rendezvous;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGHeaderNavBlock", GUID = "542C32F0-27A2-45A2-9D6C-2AF6E0599FB1", GroupName = "Hospitality")]
    public class HBGHeaderNavBlock : HBGHeaderRibbonBlock
    {
        [Display(Name = "SignInPopUpLink", GroupName = "Sign In Popup Settings", Order = 50)]
        [CultureSpecific]
        public virtual LinkItem SignInPopUpLink { get; set; }

        [Display(Name = "SignInTextMessage", GroupName = "Sign In Popup Settings", Order = 75)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString SignInTextMessage { get; set; }

        [Display(Name = "Foot Notes Link", GroupName = "Header Foot Notes", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem FootNotesLink { get; set; }

        [Display(Name = "Hotels Link", GroupName = "Menu", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem HotelsLink { get; set; }

        [Display(Name = "Left Component Title", GroupName = "Sign Up", Order = 100)]
        [CultureSpecific]
        public virtual string LeftComponentTitle { get; set; }

        [Display(Name = "Logo Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LogoImage { get; set; }

        [Display(Name = "MobileLoginText", GroupName = "MobilePopUp", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString MobileLoginText { get; set; }

        [Display(Name = "SignInDelayTime", GroupName = "Sign In Popup Settings", Order = 100)]
        [CultureSpecific]
        public virtual string SignInDelayTime { get; set; }

        [Display(Name = "SignUpLink", GroupName = "Pop Up Settings", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem SignUpLink { get; set; }

        [Display(Name = "Hotel Items", GroupName = "Menu", Order = 150)]
        [CultureSpecific]
        public virtual ContentArea HotelItems { get; set; }

        [Display(Name = "Serviced Residences Link", GroupName = "Menu", Order = 175)]
        [CultureSpecific]
        public virtual LinkItem ServicedResidencesLink { get; set; }

        [Display(Name = "Serviced Residences Items", GroupName = "Menu", Order = 187)]
        [CultureSpecific]
        public virtual ContentArea ServicedResidencesItems { get; set; }

        [Display(Name = "AutoCloseTime", GroupName = "MobilePopUp", Order = 200)]
        [CultureSpecific]
        public virtual string AutoCloseTime { get; set; }

        [Display(Name = "Foot Notes Image", GroupName = "Header Foot Notes", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference FootNotesImage { get; set; }

        [Display(Name = "Left Component Subtitle", GroupName = "Sign Up", Order = 200)]
        [CultureSpecific]
        public virtual string LeftComponentSubtitle { get; set; }

        [Display(Name = "Logo Image For Mobile", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LogoImageForMobile { get; set; }

        [Display(Name = "Menu Items", GroupName = "Menu", Order = 200)]
        [CultureSpecific]
        public virtual ContentArea MenuItems { get; set; }

        [Display(Name = "TextMessage", GroupName = "Pop Up Settings", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString TextMessage { get; set; }

        [Display(Name = "Foot Notes Heading", GroupName = "Header Foot Notes", Order = 250)]
        [CultureSpecific]
        public virtual string FootNotesHeading { get; set; }

        [Display(Name = "LpoUrl", GroupName = "Images", Order = 250)]
        [CultureSpecific]
        public virtual LinkItem LpoUrl { get; set; }

        [Display(Name = "DelayTime", GroupName = "Pop Up Settings", Order = 300)]
        [CultureSpecific]
        public virtual string DelayTime { get; set; }

        [Display(Name = "Foot Notes Description", GroupName = "Header Foot Notes", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString FootNotesDescription { get; set; }

        [Display(Name = "Logo URL", GroupName = "Images", Order = 300)]
        [CultureSpecific]
        public virtual LinkItem LogoURL { get; set; }

        [Display(Name = "Right Component Title", GroupName = "Sign Up", Order = 300)]
        [CultureSpecific]
        public virtual string RightComponentTitle { get; set; }

        [Display(Name = "Social Share List", GroupName = "Menu", Order = 300)]
        [CultureSpecific]
        public virtual ContentArea SocialShareList { get; set; }

        [Display(Name = "Oasia Event Items", GroupName = "Menu", Order = 350)]
        [CultureSpecific]
        public virtual ContentArea OasiaEventItems { get; set; }

        [Display(Name = "Background Image For Hamburger Menu", GroupName = "Images", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BackgroundImageForHamburgerMenu { get; set; }

        [Display(Name = "Right Component Subtitle", GroupName = "Sign Up", Order = 400)]
        [CultureSpecific]
        public virtual string RightComponentSubtitle { get; set; }

        [Display(Name = "Subscribe Link", GroupName = "Menu", Order = 400)]
        [CultureSpecific]
        public virtual LinkItem SubscribeLink { get; set; }

        [Display(Name = "TimeOnPage", GroupName = "Pop Up Settings", Order = 400)]
        [CultureSpecific]
        public virtual string TimeOnPage { get; set; }

        [Display(Name = "DisplayPopUpAgainAfter", GroupName = "Pop Up Settings", Order = 450)]
        [CultureSpecific]
        public virtual string DisplayPopUpAgainAfter { get; set; }

        [Display(Name = "Oasia Experience", GroupName = "Menu", Order = 500)]
        [CultureSpecific]
        public virtual LinkItem OasiaExperience { get; set; }

        [Display(Name = "Promotion Blades", GroupName = "Sign Up", Order = 500)]
        [CultureSpecific]
        public virtual ContentArea PromotionBlades { get; set; }

        [Display(Name = "Secondary Logo Image", GroupName = "Images", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference SecondaryLogoImage { get; set; }

        [Display(Name = "ShowSignUp", GroupName = "Pop Up Settings", Order = 500)]
        [CultureSpecific]
        public virtual bool ShowSignUp { get; set; }

        [Display(Name = "SignInTimeOnPage", GroupName = "Sign In Popup Settings", Order = 550)]
        [CultureSpecific]
        public virtual string SignInTimeOnPage { get; set; }

        [Display(Name = "Nav Dropdown", GroupName = "Sign Up", Order = 600)]
        [CultureSpecific]
        public virtual ContentArea NavDropdown { get; set; }

        [Display(Name = "Oasia Events", GroupName = "Menu", Order = 600)]
        [CultureSpecific]
        public virtual LinkItem OasiaEvents { get; set; }

        [Display(Name = "Secondary Logo URL", GroupName = "Images", Order = 600)]
        [CultureSpecific]
        public virtual LinkItem SecondaryLogoURL { get; set; }

        [Display(Name = "BackButtonText", GroupName = "Menu", Order = 700)]
        [CultureSpecific]
        public virtual string BackButtonText { get; set; }

        [Display(Name = "LpoTitle", GroupName = "Menu", Order = 800)]
        [CultureSpecific]
        public virtual string LpoTitle { get; set; }

        [Display(Name = "LpoDescription", GroupName = "Menu", Order = 900)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString LpoDescription { get; set; }

        [Display(Name = "LpoImage", GroupName = "Menu", Order = 1000)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LpoImage { get; set; }

        [Display(Name = "SignInDisplayPopUpAgainAfter", GroupName = "Sign In Popup Settings", Order = 1000)]
        [CultureSpecific]
        public virtual string SignInDisplayPopUpAgainAfter { get; set; }

        [Display(Name = "Deals Link", GroupName = "Menu", Order = 1100)]
        [CultureSpecific]
        public virtual LinkItem DealsLink { get; set; }

        [Display(Name = "DisplayPopUpAfterSignIn", GroupName = "Sign In Popup Settings", Order = 1100)]
        [CultureSpecific]
        public virtual bool DisplayPopUpAfterSignIn { get; set; }
        [Ignore]
        public virtual HBGBookingConfigBlock SfeBookingConfig { get; set; }
        [Ignore]
        public virtual IEnumerable<HBGSiteLanguageBlock> Languages { get; set; }
        [Ignore]
        public virtual string sfelanguage { get; set; }
        [Ignore]
        public virtual List<HBGSiteLanguageBlock> HeaderLanguagesList { get; set; }
        [Ignore]
        public virtual bool ShouldDisplayPopupAfterLogin { get; set; }
        [Ignore]
        public virtual bool ShouldDisplaySignUpPopup { get; set; }
        [Ignore]
        public virtual string CaptchaTitle { get; set; }
        [Ignore]
        public virtual string CaptchaErrorMessage { get; set; }
        [Ignore]
        public virtual HBGGenericPopupBlock GenericPopup { get; set; }
        [Ignore]
        public virtual bool ShowSignInCaptcha { get; set; }
        [Ignore]
        public virtual bool ShowSignIn { get; set; }
        [Ignore]
        public virtual string SignInSignUpText { get; set; }
        [Ignore]
        public virtual string ChainID { get; set; }
        //[Ignore]
        //public BookingWidgetValidation ValidationMessage { get; set; }
        [Ignore]
        public virtual LinkItem ForgotPasswordLink { get; set; }
        [Ignore]
        public virtual string SignOutLink { get; set; }
        [Ignore]
        public HBGAnnouncementBlock Announcement { get; set; }
        [Ignore]
        public HBGPromotionBarBlock PromotionBar { get; set; }
        [Ignore]
        public IEnumerable<HBGNavigationLinkBlock> MenuLinks { get; set; }
        [Ignore]
        public IEnumerable<HBGHeaderNavBlock> Columns { get; set; }
        //[Ignore]
        //public IEnumerable<IContent> Menus { get; set; }
    }
}
