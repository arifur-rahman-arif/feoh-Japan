using EPiServer.ServiceLocation;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Pages.StayFarEast;

namespace FEO.CMS.HBG.Helper
{
    public static class SitePageHelper
    {
        public static bool IsOasiaPage(PageData currentPage)
        {
            if (currentPage is HBGHomePage)
            {
                // For Oasia Site Pages
                if (currentPage.ContentGuid == new Guid(HBGPathConstants.OasiaHomePageID))
                {
                    return true;
                }
            }
            return false;
        }
    }
}
