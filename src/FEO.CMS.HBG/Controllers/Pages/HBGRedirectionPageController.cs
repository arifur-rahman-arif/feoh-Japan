using EPiServer.Web.Mvc.Html;
using FEO.CMS.HBG.Core.Models;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using Microsoft.AspNetCore.Mvc;

namespace FEO.CMS.HBG.Controllers.Pages
{
    public class HBGRedirectionPageController : PageControllerBase<HBGRedirectionPage>
    {
        public ActionResult Index(HBGRedirectionPage currentPage)
        {
            var model = PageViewModel.Create(currentPage);
            if (model.CurrentPage.RedirectURL == null)
                return Redirect("/");
            else
                return Redirect(Url.ContentUrl(model.CurrentPage.RedirectURL?.Href));
        }
    }
}
