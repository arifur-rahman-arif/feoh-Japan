using FEO.CMS.HBG.Core.Models;
using Microsoft.AspNetCore.Mvc;
using FEO.CMS.HBG.Core.Pages.StayFarEast;

namespace FEO.CMS.HBG.Controllers.Pages
{
    public class HBGHomePageController : PageControllerBase<HBGHomePage>
    {
        public ActionResult Index(HBGHomePage currentPage)
        {
            var model = PageViewModel.Create(currentPage);
            return View($"~/Views/FarEastHospitality/StayFarEast/Pages/HBGHomePage/Index.cshtml", model);
        }
    }
}
