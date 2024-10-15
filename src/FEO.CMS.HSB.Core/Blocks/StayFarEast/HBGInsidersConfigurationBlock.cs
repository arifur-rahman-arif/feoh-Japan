using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGInsidersConfigurationBlock", GUID = "BCE96B54-AC1F-46AD-B235-67380E30ADBF", GroupName = "Hospitality")]
    public class HBGInsidersConfigurationBlock : HBGBaseBlock
    {
        [Display(Name = "FromEmail", GroupName = "Email Notifications", Order = 100)]
        [CultureSpecific]
        public virtual string FromEmail { get; set; }

        [Display(Name = "Profile Manager API Url", GroupName = "Profile Manager API Configurations", Order = 100)]
        [CultureSpecific]
        public virtual string ProfileManagerAPIUrl { get; set; }

        [Display(Name = "Sign Up Page", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem SignUpPage { get; set; }

        [Display(Name = "SSO API Url", GroupName = "SSO API Configurations", Order = 100)]
        [CultureSpecific]
        public virtual string SSOAPIUrl { get; set; }

        [Display(Name = "Staging Sever API Url", GroupName = "Staging Sever API Configurations", Order = 100)]
        [CultureSpecific]
        public virtual string StagingSeverAPIUrl { get; set; }

        [Display(Name = "Token Endpoint", GroupName = "SFMC Configuration", Order = 100)]
        [CultureSpecific]
        public virtual string TokenEndpoint { get; set; }

        [Display(Name = "Forgot Password Page", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual LinkItem ForgotPasswordPage { get; set; }

        [Display(Name = "Profile Manager API Username", GroupName = "Profile Manager API Configurations", Order = 200)]
        [CultureSpecific]
        public virtual string ProfileManagerAPIUsername { get; set; }

        [Display(Name = "SSO API Username", GroupName = "SSO API Configurations", Order = 200)]
        [CultureSpecific]
        public virtual string SSOAPIUsername { get; set; }

        [Display(Name = "Staging Server API Username", GroupName = "Staging Sever API Configurations", Order = 200)]
        [CultureSpecific]
        public virtual string StagingServerAPIUsername { get; set; }

        [Display(Name = "ToEmail", GroupName = "Email Notifications", Order = 200)]
        [CultureSpecific]
        public virtual string ToEmail { get; set; }

        [Display(Name = "Upsert Endpoint", GroupName = "SFMC Configuration", Order = 200)]
        [CultureSpecific]
        public virtual string UpsertEndpoint { get; set; }

        [Display(Name = "Grant Type", GroupName = "SFMC Configuration", Order = 300)]
        [CultureSpecific]
        public virtual string GrantType { get; set; }

        [Display(Name = "Profile Manager API Password", GroupName = "Profile Manager API Configurations", Order = 300)]
        [CultureSpecific]
        public virtual string ProfileManagerAPIPassword { get; set; }

        [Display(Name = "Sign Up Success Page", GroupName = "Settings", Order = 300)]
        [CultureSpecific]
        public virtual LinkItem SignUpSuccessPage { get; set; }

        [Display(Name = "SSO API Password", GroupName = "SSO API Configurations", Order = 300)]
        [CultureSpecific]
        public virtual string SSOAPIPassword { get; set; }

        [Display(Name = "Staging Server API Password", GroupName = "Staging Sever API Configurations", Order = 300)]
        [CultureSpecific]
        public virtual string StagingServerAPIPassword { get; set; }

        [Display(Name = "Subject", GroupName = "Email Notifications", Order = 300)]
        [CultureSpecific]
        public virtual string Subject { get; set; }

        [Display(Name = "Body", GroupName = "Email Notifications", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Body { get; set; }

        [Display(Name = "Chain ID", GroupName = "SSO API Configurations", Order = 400)]
        [CultureSpecific]
        public virtual string ChainID { get; set; }

        [Display(Name = "Client Id", GroupName = "SFMC Configuration", Order = 400)]
        [CultureSpecific]
        public virtual string ClientId { get; set; }

        [Display(Name = "ProgramID", GroupName = "Profile Manager API Configurations", Order = 400)]
        [CultureSpecific]
        public virtual string ProgramID { get; set; }

        [Display(Name = "Reset Password Success Page", GroupName = "Settings", Order = 400)]
        [CultureSpecific]
        public virtual LinkItem ResetPasswordSuccessPage { get; set; }

        [Display(Name = "Sign Out Page", GroupName = "Settings", Order = 450)]
        [CultureSpecific]
        public virtual LinkItem SignOutPage { get; set; }

        [Display(Name = "Client Secret", GroupName = "SFMC Configuration", Order = 500)]
        [CultureSpecific]
        public virtual string ClientSecret { get; set; }

        [Display(Name = "LoyalLevel", GroupName = "Profile Manager API Configurations", Order = 500)]
        [CultureSpecific]
        public virtual string LoyalLevel { get; set; }

        [Display(Name = "Show Captcha on Sign Up Page", GroupName = "Settings", Order = 500)]
        [CultureSpecific]
        public virtual bool ShowCaptchaonSignUpPage { get; set; }

        [Display(Name = "AddExpiryYear", GroupName = "Profile Manager API Configurations", Order = 600)]
        [CultureSpecific]
        public virtual int AddExpiryYear { get; set; }

        [Display(Name = "Scope", GroupName = "SFMC Configuration", Order = 600)]
        [CultureSpecific]
        public virtual string Scope { get; set; }

        [Display(Name = "User Logged In Text", GroupName = "Settings", Order = 600)]
        [CultureSpecific]
        public virtual string UserLoggedInText { get; set; }

        [Display(Name = "Account Id", GroupName = "SFMC Configuration", Order = 700)]
        [CultureSpecific]
        public virtual string AccountId { get; set; }

        [Display(Name = "Thank You Message For New User", GroupName = "Settings", Order = 700)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString ThankYouMessageForNewUser { get; set; }

        [Display(Name = "Event Definition Key", GroupName = "SFMC Configuration", Order = 800)]
        [CultureSpecific]
        public virtual string EventDefinitionKey { get; set; }

        [Display(Name = "Thank You Message For Existing User", GroupName = "Settings", Order = 800)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString ThankYouMessageForExistingUser { get; set; }

        [Display(Name = "Business Context", GroupName = "SSO API Configurations", Order = 900)]
        [CultureSpecific]
        public virtual string BusinessContext { get; set; }

        [Display(Name = "Event Definition Key FO", GroupName = "SFMC Configuration", Order = 900)]
        [CultureSpecific]
        public virtual string EventDefinitionKeyFO { get; set; }

        [Display(Name = "Show Sign In Drop down In header", GroupName = "Settings", Order = 900)]
        [CultureSpecific]
        public virtual bool ShowSignInDropdownInheader { get; set; }

        [Display(Name = "ID Context", GroupName = "SSO API Configurations", Order = 1000)]
        [CultureSpecific]
        public virtual string IDContext { get; set; }

        [Display(Name = "Sign In Sign Up Text", GroupName = "Settings", Order = 1000)]
        [CultureSpecific]
        public virtual string SignInSignUpText { get; set; }

        [Display(Name = "Upsert Endpoint2", GroupName = "SFMC Configuration", Order = 1000)]
        [CultureSpecific]
        public virtual string UpsertEndpoint2 { get; set; }

        [Display(Name = "Show Captcha on Sign In Modal", GroupName = "Settings", Order = 1100)]
        [CultureSpecific]
        public virtual bool ShowCaptchaonSignInModal { get; set; }

        [Display(Name = "SSO API HttpVersion", GroupName = "SSO API Configurations", Order = 1100)]
        [CultureSpecific]
        public virtual string SSOAPIHttpVersion { get; set; }

        [Display(Name = "Authentication Timeout", GroupName = "Settings", Order = 1200)]
        [CultureSpecific]
        public virtual double AuthenticationTimeout { get; set; }

        [Display(Name = "Sign Out Page Redirect", GroupName = "Settings", Order = 1300)]
        [CultureSpecific]
        public virtual LinkItem SignOutPageRedirect { get; set; }

    }
}
