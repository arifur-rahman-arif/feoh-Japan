using EPiServer.Web.Mvc;
using EPiServer.Web.Routing;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using Microsoft.AspNetCore.Mvc;
using FEO.CMS.HBG.Business.Forms;
using FEO.CMS.HBG.Core.Pages;
using FEO.CMS.HBG.Core.Pages.StayFarEast;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGBookingWidgetBlockController : BlockControllerBase<HBGBookingWidgetBlock>
    {
        private readonly IPageRouteHelper pageRouteHelper;
        private readonly IContentLoader contentLoader;
        public HBGBookingWidgetBlockController(IPageRouteHelper PageRouteHelper, IContentLoader ContentLoader)
        {
            pageRouteHelper = PageRouteHelper;
            contentLoader = ContentLoader;
        }
        protected override IViewComponentResult InvokeComponent(HBGBookingWidgetBlock currentBlock)
        {
            var rootPageReference = ContentReference.StartPage;
            var sitePageReference = contentLoader.Get<PageData>(rootPageReference).ParentLink;
            var site = contentLoader.Get<HBGSite>(sitePageReference);
            var home = contentLoader.Get<HBGHomePage>(rootPageReference);

            //var bookingWidgetData = mvcContext.GetDataSourceItem<IBookingWidgetData>();
            var model = new HBGHeaderNavBlock();
            model.SfeBookingConfig = CreateBookingConfig(site);
            //AddPopularDestination();
            //model.BookingWidgetData = bookingWidgetData ?? null;
            ViewData["Istestenabled"] = false;
            var bookNowMessage = home;

            model.ValidationMessage = bookNowMessage;
            var insidersConfig = InsidersRepository.CreateInsiderConfig(site);

            if (insidersConfig != null)
                model.ChainID = insidersConfig.ChainID;

            return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGBookingWidgetBlock/index.cshtml", model);
        }
    }
}
