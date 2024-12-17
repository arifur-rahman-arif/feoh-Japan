using EPiServer.Logging;
using EPiServer.ServiceLocation;
using EPiServer.Web.Mvc;
using FEO.CMS.HBG.Core.Blocks.Quincy;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Pages;
using FEO.CMS.HBG.Helper;
using Microsoft.AspNetCore.Mvc;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGAwardsComponentBlockController : BlockComponent<HBGAwardsComponentBlock>
    {
        private readonly EPiServer.Logging.ILogger logger = LogManager.GetLogger(typeof(HBGInsidersRibbonBlockController));
        private static IContentLoader contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
        protected override IViewComponentResult InvokeComponent(HBGAwardsComponentBlock currentBlock)
        {
            try
            {
                var rootPageReference = ContentReference.StartPage;
                var sitePageReference = contentLoader.Get<PageData>(rootPageReference).ParentLink;
                var site = contentLoader.Get<HBGSite>(sitePageReference);

                var siteConfigPath = HBGPathConstants.RelativeConfig.Replace("StayFarEast", site.Name.ToString()) + "/Site/" + TemplateNames.WebsiteConfig;

                var getWebsiteConfig = BlockHelper.GetDescendantPath(ContentReference.GlobalBlockFolder, siteConfigPath);
                var websiteConfig = getWebsiteConfig != null ? contentLoader.Get<HBGWebsiteConfigBlock>(getWebsiteConfig) : null;
                if (websiteConfig != null)
                    ViewData["OverlayLogo"] = websiteConfig.PopUpIcon;

                var awardList = GetAwardList(currentBlock.Datasource);
                ViewData["AwardsOrderedForPopUp"] = awardList.Awards.OrderBy(x => x.SortOrderForPopUp);

                return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGAwardsComponentBlock/Index.cshtml", awardList);
            }
            catch (Exception exp)
            {
                logger.Error("Error in HBGAwardsComponentBlockController: " + exp.InnerException, this);
            }
            return Content(string.Empty);
        }
        public HBGAwardsComponentBlock GetAwardList(ContentReference datasource) 
        {
            try
            {
                var contentFolder = contentLoader.Get<IContent>(datasource);
                if (contentFolder.GetOriginalType() == typeof(ContentFolder))
                {
                    var HBGAwardsBlock = new HBGAwardsComponentBlock();
                    HBGAwardsBlock.Awards = contentLoader.GetChildren<HBGAwardsBlock>(contentFolder.ContentLink);
                    return HBGAwardsBlock;
                }
            }
            catch (Exception exp)
            {
                logger.Error("Error in GetAwardList: " + exp.InnerException, this);
            }

            return null;
        }
    }
}
