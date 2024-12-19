using EPiServer.ServiceLocation;
using EPiServer.Web.Mvc;
using EPiServer.Web.Routing;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using Microsoft.AspNetCore.Mvc;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGVenueDetailBlockController : BlockComponent<HBGVenueDetailBlock>
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        protected override IViewComponentResult InvokeComponent(HBGVenueDetailBlock currentBlock)
        {
            var model = ServiceLocator.Current.GetInstance<IPageRouteHelper>().Page;

            if (model is HBGMeetingVenueDetailPage)
            {
                return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGMeetingVenueDetailBlock/index.cshtml", model);
            }

            if (model is HBGWeddingVenueDetailPage)
            {
                return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGWeddingVenueDetailBlock/index.cshtml", model);
            }

            return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGEventErrorBlock/index.cshtml", model);
        }
    }
}
