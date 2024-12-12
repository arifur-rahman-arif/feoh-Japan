using EPiServer.Web.Mvc;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGHeaderNavigationBlockController : BlockComponent<HBGHeaderNavigationBlock>
    {
        protected override IViewComponentResult InvokeComponent(HBGHeaderNavigationBlock currentContent)
        {
            //var bookingWidgetData = mvcContext.GetDataSourceItem<IBookingWidgetData>();
            var model = NavigationRepository.GetHeaderNavigation();
            //model.SfeBookingConfig = this.configFactory.CreateBookingConfig();
            //List<HeaderLanguage> headerlist = new List<HeaderLanguage>();
            //model.Columns = SetPropertyNavigationNew(model.Columns);
            //ViewData["SubNavigation"] = this.provider.GetCurrent<StayFarEast.Domain.Models.View>().SubNavigation;

            //foreach (var language in model.Languages)
            //{
            //    var header = new HeaderLanguage();
            //    header.LanguageTitle = language.Title;
            //    header.LanguageName = language.Language.Name;
            //    headerlist.Add(header);
            //}

            //model.sfelanguage = Sitecore.Context.Language.Name;
            //model.HeaderLanguagesList = headerlist; 

            //AddPopularDestination();
            //model.BookingWidgetData = bookingWidgetData != null ? bookingWidgetData : null;
            //ViewData["Istestenabled"] = false;

            //var bookNowMessage = context.GetHomeItem<BookingWidgetValidation>();

            //model.ValidationMessage = bookNowMessage;
            //model.ForgotPasswordLink = insidersConfig?.ForgotPasswordPage;
            //model.SignUpLink = insidersConfig?.SignUpPage;
            //model.SignOutLink = !string.IsNullOrWhiteSpace(insidersConfig?.SignOutPage?.Url) ? insidersConfig?.SignOutPage?.Url : string.Empty;
            //ViewData["ErrorMessage"] = this.dictionary.GetValue((DictionaryKeys.InsidersLoginErrorMsg));
            //model.ChainID = insidersConfig?.ChainID;

            //FormAuthentication.ValidateAuthentication();
            //model.ShowSignIn = insidersConfig.ShowSignIn;
            //model.SignInSignUpText = insidersConfig?.SignInSignUpText;

            //model.GenericPopup = PopupHelper.GetSiteWideGenericPopup(this.navigationService, this.configFactory, this.provider, this);
            //model.ShowSignInCaptcha = insidersConfig.ShowCaptchaOnSignInModal;
            //model.CaptchaTitle = this.dictionary.GetValue((DictionaryKeys.InsidersCaptchaVerification));
            //model.CaptchaErrorMessage = this.dictionary.GetValue((DictionaryKeys.InsidersCaptchaErrorMessage));

            //model.ShouldDisplaySignUpPopup = true;
            //if (string.IsNullOrEmpty(model.TextMessage) || model.ShowSignUp == false)
            //{
            //    model.ShouldDisplaySignUpPopup = false;
            //}

            //model.ShouldDisplayPopupAfterLogin = true;
            //if (string.IsNullOrEmpty(model.SignInTextMessage) || model.DisplayPopUpAfterSignIn == false)
            //{
            //    model.ShouldDisplayPopupAfterLogin = false;
            //}
            //Session["InitialSession"] = "feh";

            return View("/Views/FarEastHospitality/StayFarEast/Blocks/HBGHeaderNavigationBlock/Index.cshtml", model);
        }
    }
}
