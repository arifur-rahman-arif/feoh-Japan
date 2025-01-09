using EPiServer.Web.Mvc;
using EPiServer.Web.Routing;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using Microsoft.AspNetCore.Mvc;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGBestRateBlockController : BlockComponent<HBGBestRateBlock>
    {
        private readonly IContentLoader _contentLoader;
        public HBGBestRateBlockController(IContentLoader contentLoader)
        {

            _contentLoader = contentLoader;

        }

        protected override IViewComponentResult InvokeComponent(HBGBestRateBlock currentBlock)
        {
            var startPage = _contentLoader.Get<PageData>(ContentReference.StartPage);
            if (startPage is HBGHomePage)
            {
                // For Oasia Site Pages
                if (startPage.ContentGuid == new Guid(HBGPathConstants.OasiaHomePageID))
                {
                    return View($"{ViewsPath.Hospitality_Oasia_BLOCKS_PATH}/HBGBestRateBlock/index.cshtml", currentBlock);
                }
                // For StayFarEast Site Pages
                else if (startPage.ContentGuid == new Guid(HBGPathConstants.StayFarEastHomePageID))
                {
                    return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGBestRateBlock/index.cshtml", currentBlock);
                }

            }
           return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGBestRateBlock/index.cshtml", currentBlock);
        }
    }
}
