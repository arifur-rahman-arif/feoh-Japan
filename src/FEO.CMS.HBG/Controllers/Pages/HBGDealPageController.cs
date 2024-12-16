using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Models;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using Microsoft.AspNetCore.Mvc;

namespace FEO.CMS.HBG.Controllers.Pages
{
    public class HBGDealPageController : PageControllerBase<HBGDealPage>
    {
        public ActionResult Index(HBGDealPage currentpage)
        {
            var model = PageViewModel.Create(currentpage);
            return View($"{ViewsPath.Hospitality_StayFarEast_PAGES_PATH}/HBGDealPage/Index.cshtml", model);
        }
    }
}
