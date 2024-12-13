using EPiServer.Logging;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Pages;
using Microsoft.AspNetCore.Mvc;
using EPiServer.ServiceLocation;
using FEO.CMS.HBG.Helper;
using FEO.CMS.HBG.Core.Pages.StayFarEast;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGApartmentComponentBlockController : BlockControllerBase<HBGApartmentComponentBlock>
    {
        private readonly EPiServer.Logging.ILogger logger = LogManager.GetLogger(typeof(HBGApartmentComponentBlockController));
        private static IContentLoader contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
        protected override IViewComponentResult InvokeComponent(HBGApartmentComponentBlock currentBlock)
        {
            try
            {
                var rootPageReference = ContentReference.StartPage;
                var sitePageReference = contentLoader.Get<PageData>(rootPageReference).ParentLink;
                var site = contentLoader.Get<HBGSite>(sitePageReference);

                var Model = BlockHelper.GetCurrentPage<HBGApartmentPage>();
                Model.ParentListing = BlockHelper.GetParentWithTemplate<HBGListingPage>(Model.ContentLink);

                var websiteConfig = CreateWebsiteConfig(site);
                var bookingConfig = CreateBookingConfig(site);

                Model.EnableToShowRate = websiteConfig.EnableToShowRate;
                string currency = HttpContext?.Request?.Query["currency"];

                if (string.IsNullOrEmpty(currency))
                {
                    currency = BlockHelper.GetCurrencySymbol(Model.ParentListing?.Country?.ISOCode);
                }

                Model.Currency = currency;
                //ViewData["BookingUrl"] = OptimizelyHelperExtension.AddBookingURL(Model.ParentListing, websiteConfig, bookingConfig);

                return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGApartmentComponentBlock/Index.cshtml", Model);
            }
            catch (Exception exp)
            {
                logger.Error("Error in HBGApartmentComponentBlockController: " + exp.InnerException, this);
            }
            return Content(string.Empty);
        }
    }
}
