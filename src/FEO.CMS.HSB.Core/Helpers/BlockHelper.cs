using EPiServer;
using EPiServer.Core;
using EPiServer.ServiceLocation;
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
        public static IList<IContent> GetContentAreaItems(ContentArea contentArea)
        {
            if (contentArea == null)
            {
                return null;
            }

            IList<IContent> list = new List<IContent>();
            var contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();

            foreach (var item in contentArea.Items)
            {
                var contentLink = item.ContentLink;
                var content = contentLoader.Get<IContent>(contentLink);
                list.Add(content);
            }

            return list;
        }
    }
}
