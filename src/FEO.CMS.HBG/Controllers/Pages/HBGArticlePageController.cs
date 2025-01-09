using EPiServer.Core.Internal;
using EPiServer.ServiceLocation;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Models;
using FEO.CMS.HBG.Core.Pages;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using Microsoft.AspNetCore.Mvc;


namespace FEO.CMS.HBG.Controllers.Pages
{
    public class HBGArticlePageController : PageControllerBase<HBGArticlePage>
    {
        private static readonly IContentLoader ContentLoader;
        static HBGArticlePageController()
        {
            ContentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
        }
        public ActionResult Index(HBGArticlePage currentPage)
        {
            var model = PageViewModel.Create(currentPage);
            var rootPageReference = ContentReference.StartPage;
            var sitePageReference = ContentLoader.Get<PageData>(rootPageReference).ParentLink;
            var site = ContentLoader.Get<HBGSite>(sitePageReference);
            if (site.Name.ToLower() == "oasia")
            {
                return View($"{ViewsPath.Hospitality_Oasia_PAGES_PATH}/HBGArticlePage/Index.cshtml", model);
            }
            else if (site.Name.ToLower() == "rendezvous")
            {
                return View($"{ViewsPath.Hospitality_Rendezvous_PAGES_PATH}/HBGArticlePage/Index.cshtml", model);
            }
            else
            {
                return View($"{ViewsPath.Hospitality_StayFarEast_PAGES_PATH}/HBGArticlePage/Index.cshtml", model);
            }
        }
    }
}
