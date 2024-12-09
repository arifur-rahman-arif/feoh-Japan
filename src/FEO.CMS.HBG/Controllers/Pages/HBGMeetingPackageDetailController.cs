using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Models;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using Microsoft.AspNetCore.Mvc;

namespace FEO.CMS.HBG.Controllers.Pages
{
    public class HBGMeetingPackageDetailController : PageControllerBase<HBGMeetingPackageDetailPage>
    {
        public ActionResult Index(HBGMeetingPackageDetailPage currentPage)
        {
            var model = PageViewModel.Create(currentPage);
            return View($"{ViewsPath.Hospitality_StayFarEast_PAGES_PATH}/HBGMeetingPackageDetailPage/Index.cshtml", model);
        }
    }
}
