using EPiServer.Logging;
using EPiServer.Web.Mvc;
using FEO.CMS.HBG.Business.Dictionary;
using FEO.CMS.HBG.Business.Forms;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Models;
using FEO.CMS.HBG.Helper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGInsidersRibbonBlockController : BlockComponent<HBGInsidersRibbonBlock>
    {
        private readonly EPiServer.Logging.ILogger _logger = LogManager.GetLogger(typeof(HBGInsidersRibbonBlockController));
        private readonly IMemoryCache _memoryCache;
        private readonly IContentLoader _contentLoader;
        public HBGInsidersRibbonBlockController(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        protected override IViewComponentResult InvokeComponent(HBGInsidersRibbonBlock currentBlock)
        {
            try
            {
                FormAuthentication.ValidateAuthentication(HttpContext, _memoryCache);
                HeaderNavViewModel Model = new HeaderNavViewModel(); //this.navigationService.GetHeaderNavigation();
                var getInsConfig = BlockHelper.GetDescendantPath(ContentReference.GlobalBlockFolder, HBGPathConstants.InsidersConfigurationPath);
                var InsConfig = getInsConfig.ID != 0 ? _contentLoader.GetDescendents(getInsConfig)
                    .Select(block => _contentLoader.Get<IContent>(block))
                    .OfType<HBGInsidersConfigurationBlock>() : null;

                Model.ForgotPasswordLink = InsConfig?.FirstOrDefault()?.ForgotPasswordPage;
                Model.SignUpLink = InsConfig?.FirstOrDefault()?.SignUpPage;
                Model.SignOutLink = !string.IsNullOrWhiteSpace(InsConfig?.FirstOrDefault()?.SignOutPage?.Href) ? InsConfig?.FirstOrDefault()?.SignOutPage?.Href : string.Empty;
                Model.ShowSignIn = InsConfig.FirstOrDefault().ShowSignInDropdownInheader;
                Model.SignInSignUpText = InsConfig?.FirstOrDefault()?.SignInSignUpText;
                ViewData["ErrorMessage"] = DictionaryHelper.DictionaryEntry(DictionaryKeys.InsidersLoginErrorMsg, string.Empty);

                //if (System.Web.HttpContext.Current.Request.IsAuthenticated && Session[FieldNames.InsidersFieldName.SessionEmail] == null)
                //    FormsAuthentication.SignOut();

                Model.ChainID = InsConfig?.FirstOrDefault()?.ChainID;
                Model.ShowSignInCaptcha = InsConfig.FirstOrDefault().ShowCaptchaonSignInModal;
                Model.CaptchaTitle = DictionaryHelper.DictionaryEntry(DictionaryKeys.InsidersCaptchaVerification, string.Empty);
                Model.CaptchaErrorMessage = DictionaryHelper.DictionaryEntry(DictionaryKeys.InsidersCaptchaErrorMessage, string.Empty);

                return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGInsidersRibbonBlock/Index.cshtml", Model);
            }
            catch (Exception exp)
            {
                _logger.Error("Error in HeaderRibbon" + exp.InnerException, this);
            }
            return Content(string.Empty);
        }
    }
}
