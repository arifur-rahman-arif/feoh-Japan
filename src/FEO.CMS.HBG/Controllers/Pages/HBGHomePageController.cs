using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Models;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using Microsoft.AspNetCore.Mvc;

namespace FEO.CMS.HBG.Controllers.Pages
{
    public class HBGHomePageController : PageControllerBase<HBGHomePage>
    {
        public ActionResult Index(HBGHomePage currentPage)
        {
            var model = PageViewModel.Create(currentPage);
            return View($"{ViewsPath.Hospitality_StayFarEast_PAGES_PATH}/HBGHomePage/Index.cshtml", model);
        }
    }
}
