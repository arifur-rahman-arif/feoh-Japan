using EPiServer.Core;
using EPiServer.Web.Routing;
using Microsoft.Extensions.DependencyInjection;

namespace FEO.CMS.HBG.Core.Helpers
{
    public static class BlockHelper
    {
        public static T GetCurrentPage<T>() where T : PageData
        {
            var pageRouteHelper = EPiServer.ServiceLocation.ServiceLocator.Current.GetService<IPageRouteHelper>();
            var CurrentPage = pageRouteHelper?.Page as T;
            return CurrentPage;
        }
    }
}
