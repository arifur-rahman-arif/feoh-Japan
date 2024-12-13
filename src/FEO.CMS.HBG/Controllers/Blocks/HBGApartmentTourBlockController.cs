using EPiServer.Logging;
using EPiServer.ServiceLocation;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Pages;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using FEO.CMS.HBG.Helper;
using Microsoft.AspNetCore.Mvc;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGApartmentTourBlockController : BlockControllerBase<HBGApartmentTourBlock>
    {
        private readonly EPiServer.Logging.ILogger logger = LogManager.GetLogger(typeof(HBGApartmentTourBlockController));
        private static IContentLoader contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
        protected override IViewComponentResult InvokeComponent(HBGApartmentTourBlock currentBlock)
        {
            try
            {
                var rootPageReference = ContentReference.StartPage;
                var sitePageReference = contentLoader.Get<PageData>(rootPageReference).ParentLink;
                var site = contentLoader.Get<HBGSite>(sitePageReference);

                currentBlock.HBGApartmentPage = BlockHelper.GetCurrentPage<HBGApartmentPage>();
                currentBlock.HBGApartmentPage.ParentListing = BlockHelper.GetParentWithTemplate<HBGListingPage>(currentBlock.HBGApartmentPage.ContentLink);

                return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGApartmentTourBlock/Index.cshtml", currentBlock);
            }
            catch (Exception exp)
            {
                logger.Error("Error in HBGApartmentTourBlockController: " + exp.InnerException, this);
            }
            return Content(string.Empty);
        }
    }
}
