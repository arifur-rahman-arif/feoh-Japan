using EPiServer.Core.Internal;
using EPiServer.ServiceLocation;
using EPiServer.Web.Mvc;
using EPiServer.Web.Mvc.Html;
using EPiServer.Web.Routing;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using Microsoft.AspNetCore.Mvc;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGPackageDetailBlockController : BlockComponent<HBGPackageDetailBlock>
    {
        private readonly IContentLoader _contentLoader;
        private readonly IContentRepository _contentRepository;
        public HBGPackageDetailBlockController( IContentLoader contentLoader, IContentRepository contentRepository)
        {
            _contentLoader = contentLoader;
            _contentRepository = contentRepository;
        }
        //public IActionResult Index()
        //{
        //    return View();
        //}
        protected override IViewComponentResult InvokeComponent(HBGPackageDetailBlock currentBlock)
        {
            var model = ServiceLocator.Current.GetInstance<IPageRouteHelper>().Page;

            if (model is HBGMeetingPackageDetailPage)
            {

                var websiteConfigGuid = Constants.WebsiteConfigGuid;
                var websiteConfigBlock = ContentLoader.Get<HBGWebsiteConfigBlock>(new Guid(websiteConfigGuid));
                return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGPackageDetailBlock/index.cshtml", model);
            }

            if (model is HBGWeddingPackageDetailPage)
            {
                return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGWeedingPackageDetailBlock/index.cshtml", model);
            }

            return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGEventBlock/index.cshtml", model);
        }
    }
}
