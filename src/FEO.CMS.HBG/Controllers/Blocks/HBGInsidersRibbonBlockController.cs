using EPiServer.Logging;
using EPiServer.Web.Mvc;
using FEO.CMS.HBG.Business.Forms;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGInsidersRibbonBlockController : BlockComponent<HBGInsidersRibbonBlock>
    {
        private readonly EPiServer.Logging.ILogger _logger = LogManager.GetLogger(typeof(HBGInsidersRibbonBlockController));
        private readonly IMemoryCache _memoryCache;
        public HBGInsidersRibbonBlockController(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        protected override IViewComponentResult InvokeComponent(HBGInsidersRibbonBlock currentBlock)
        {
            try
            {
                FormAuthentication.ValidateAuthentication(HttpContext, _memoryCache);
                //var Model = this.navigationService.GetHeaderNavigation();
                //var InsConfig = Context.QuerySingle<InsidersConfiguration>(PathMapper.Get(Paths.InsidersConfigurationPath));

                //Model.ForgotPasswordLink = InsConfig.ForgotPasswordPage;
                //Model.SignUpLink = InsConfig.SignUpPage;
                //Model.SignOutLink = !string.IsNullOrWhiteSpace(InsConfig.SignOutPage?.Url) ? InsConfig.SignOutPage?.Url : string.Empty;
                //Model.ShowSignIn = InsConfig.ShowSignIn;
                //Model.SignInSignUpText = InsConfig.SignInSignUpText;
                //ViewData["ErrorMessage"] = this.dictionary.GetValue((DictionaryKeys.InsidersLoginErrorMsg));

                //if (System.Web.HttpContext.Current.Request.IsAuthenticated && Session[FieldNames.InsidersFieldName.SessionEmail] == null)
                //    FormsAuthentication.SignOut();
                //Model.ChainID = InsConfig.ChainID;
                //Model.ShowSignInCaptcha = InsConfig.ShowCaptchaOnSignInModal;
                //Model.CaptchaTitle = this.dictionary.GetValue((DictionaryKeys.InsidersCaptchaVerification));
                //Model.CaptchaErrorMessage = this.dictionary.GetValue((DictionaryKeys.InsidersCaptchaErrorMessage));
                return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGInsidersRibbonBlock/Index.cshtml", currentBlock);
            }
            catch (Exception exp)
            {
                _logger.Error("Error in HeaderRibbon" + exp.InnerException, this);
            }
            return Content(string.Empty);
        }
    }
}
