using EPiServer.Core.Internal;
using EPiServer.Logging;
using EPiServer.Web.Mvc;
using FEO.CMS.HBG.Business.Dictionary;
using FEO.CMS.HBG.Business.Forms;
using FEO.CMS.HBG.Core.Blocks.Rendezvous;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Models;
using FEO.CMS.HBG.Helper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGInsidersRibbonBlockController : BlockControllerBase<HBGInsidersRibbonBlock>
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
                var Model = GetHeaderNavigation();
                var getInsConfig = BlockHelper.GetDescendantPath(ContentReference.GlobalBlockFolder, HBGPathConstants.InsidersConfigurationPath);
                var InsConfig = getInsConfig.ID != 0 ? _contentLoader.GetDescendents(getInsConfig)
                    .Select(block => _contentLoader.Get<IContent>(block))
                    .OfType<HBGInsidersConfigurationBlock>() : null;

                //Model.ForgotPasswordLink = InsConfig?.FirstOrDefault()?.ForgotPasswordPage;
                //Model.SignUpLink = InsConfig?.FirstOrDefault()?.SignUpPage;
                //Model.SignOutLink = !string.IsNullOrWhiteSpace(InsConfig?.FirstOrDefault()?.SignOutPage?.Href) ? InsConfig?.FirstOrDefault()?.SignOutPage?.Href : string.Empty;
                //Model.ShowSignIn = InsConfig.FirstOrDefault().ShowSignInDropdownInheader;
                //Model.SignInSignUpText = InsConfig?.FirstOrDefault()?.SignInSignUpText;
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
        public HBGHeaderNavBlock GetHeaderNavigation()
        {
            try
            {
                var globalAssetsFolder = ContentReference.GlobalBlockFolder;
                var headerNavFolder = BlockHelper.GetDescendantPath(globalAssetsFolder, HBGPathConstants.StayFarEastNavigation + "/");

                if (headerNavFolder != null)
                {
                    var headerNav = new HBGHeaderNavBlock();

                    headerNav.Columns = _contentLoader.GetChildren<HBGHeaderNavBlock>(headerNavFolder).Where(x => x.GetOriginalType() == typeof(HBGHeaderNavBlock));
                    var getNavFolder = _contentLoader.GetChildren<IContent>(headerNavFolder).FirstOrDefault(block => block.Name.Equals(TemplateNames.HeaderNav, StringComparison.OrdinalIgnoreCase) && block.GetOriginalType() == typeof(ContentFolder));

                    if (getNavFolder != null)
                    {
                        var menuLinks = _contentLoader.GetChildren<HBGNavigationLinkBlock>(getNavFolder.ContentLink);
                        headerNav.MenuLinks = menuLinks.OrderBy(x => x.SortOrder);
                    }

                    return headerNav;
                }
            }
            catch (Exception ex)
            {
                _logger.Error("GetHeaderNavigation() Error: " + ex.Message);
            }
            return null;
        }
    }
}
