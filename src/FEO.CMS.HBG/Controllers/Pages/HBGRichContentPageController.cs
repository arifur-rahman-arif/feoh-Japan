using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Models;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using Microsoft.AspNetCore.Mvc;

namespace FEO.CMS.HBG.Controllers.Pages
{
    public class HBGRichContentPageController : PageControllerBase<HBGRichContentPage>
    {
        private readonly IHttpContextAccessor _contextAccessor;
        private readonly IContentLoader _contentLoader;
        private readonly IContentRepository _contentRepository;
        public HBGRichContentPageController(IHttpContextAccessor contextAccessor, IContentLoader contentLoader, IContentRepository contentRepository)
        {
            _contextAccessor = contextAccessor;
            _contentLoader = contentLoader;
            _contentRepository = contentRepository;
        }
        public ActionResult Index(HBGRichContentPage currentPage)
        {
            var model = PageViewModel.Create(currentPage);
            var query = _contextAccessor?.HttpContext?.Request.Query;
            ViewData["Parameters"] = query;
            return View($"{ViewsPath.Hospitality_StayFarEast_PAGES_PATH}/HBGRichContentPage/Index.cshtml", model);
        }
    }
}
