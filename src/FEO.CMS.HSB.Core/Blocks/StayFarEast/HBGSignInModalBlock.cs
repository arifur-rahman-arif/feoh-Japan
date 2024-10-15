using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGSignInModalBlock", GUID = "72A90041-6D7D-402E-BB34-A3D1D7DA4C82", GroupName = "Hospitality")]
    public class HBGSignInModalBlock : HBGBaseBlock
    {
        [Display(Name = "EmailLabel", GroupName = "SignInSection", Order = 100)]
        [CultureSpecific]
        public virtual string EmailLabel { get; set; }

        [Display(Name = "EmailPlaceholder", GroupName = "SignInSection", Order = 200)]
        [CultureSpecific]
        public virtual string EmailPlaceholder { get; set; }

        [Display(Name = "EmailCheckValidation", GroupName = "SignInSection", Order = 300)]
        [CultureSpecific]
        public virtual string EmailCheckValidation { get; set; }

        [Display(Name = "EmailValidValidation", GroupName = "SignInSection", Order = 400)]
        [CultureSpecific]
        public virtual string EmailValidValidation { get; set; }

        [Display(Name = "PasswordLabel", GroupName = "SignInSection", Order = 500)]
        [CultureSpecific]
        public virtual string PasswordLabel { get; set; }

        [Display(Name = "PasswordCheckValidation", GroupName = "SignInSection", Order = 600)]
        [CultureSpecific]
        public virtual string PasswordCheckValidation { get; set; }

        [Display(Name = "LoginErrorMessage", GroupName = "SignInSection", Order = 700)]
        [CultureSpecific]
        public virtual string LoginErrorMessage { get; set; }

        [Display(Name = "SubmitText", GroupName = "SignInSection", Order = 800)]
        [CultureSpecific]
        public virtual string SubmitText { get; set; }

        [Display(Name = "RedirectUrl", GroupName = "SignInSection", Order = 900)]
        [CultureSpecific]
        public virtual LinkItem RedirectUrl { get; set; }

        [Display(Name = "ShowCaptchaSignInModal", GroupName = "SignInSection", Order = 1000)]
        [CultureSpecific]
        public virtual bool ShowCaptchaSignInModal { get; set; }

        [Display(Name = "CaptchaErrorMessage", GroupName = "SignInSection", Order = 1100)]
        [CultureSpecific]
        public virtual string CaptchaErrorMessage { get; set; }

        [Display(Name = "CaptchaTitle", GroupName = "SignInSection", Order = 1200)]
        [CultureSpecific]
        public virtual string CaptchaTitle { get; set; }

    }
}
