using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Models;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using FEO.CMS.HBG.Core.Pages;
using Microsoft.AspNetCore.Mvc;
using EPiServer.ServiceLocation;

namespace FEO.CMS.HBG.Controllers.Pages
{
    public class HBGApartmentPageController : PageControllerBase<HBGApartmentPage>
    {
        private static readonly IContentLoader ContentLoader;
        static HBGApartmentPageController()
        {
            ContentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
        }
        public ActionResult Index(HBGApartmentPage currentPage)
        {
            var model = PageViewModel.Create(currentPage);
            var rootPageReference = ContentReference.StartPage;
            var sitePageReference = ContentLoader.Get<PageData>(rootPageReference).ParentLink;
            var site = ContentLoader.Get<HBGSite>(sitePageReference);

            return View($"{ViewsPath.Hospitality_StayFarEast_PAGES_PATH}/HBGApartmentPage/Index.cshtml", model);
        }
    }
}
