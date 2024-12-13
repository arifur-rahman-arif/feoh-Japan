using EPiServer.ServiceLocation;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Models;
using FEO.CMS.HBG.Core.Pages;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using Microsoft.AspNetCore.Mvc;

namespace FEO.CMS.HBG.Controllers.Pages
{
    public class HBGListingPageController : PageControllerBase<HBGListingPage>
    {
        private static readonly IContentLoader ContentLoader;
        static HBGListingPageController()
        {
            ContentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
        }
        public ActionResult Index(HBGListingPage currentPage)
        {
            var model = PageViewModel.Create(currentPage);
            var rootPageReference = ContentReference.StartPage;
            var sitePageReference = ContentLoader.Get<PageData>(rootPageReference).ParentLink;
            var site = ContentLoader.Get<HBGSite>(sitePageReference);
            
            return View($"{ViewsPath.Hospitality_StayFarEast_PAGES_PATH}/HBGListingPage/Index.cshtml", model);
        }
    }
}
