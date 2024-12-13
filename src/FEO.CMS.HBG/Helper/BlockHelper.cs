using EPiServer.ServiceLocation;
using EPiServer.Web.Routing;
using System.Globalization;

namespace FEO.CMS.HBG.Helper
{
    public static class BlockHelper
    {
        public static T GetCurrentPage<T>() where T : PageData
        {
            var pageRouteHelper = EPiServer.ServiceLocation.ServiceLocator.Current.GetService<IPageRouteHelper>();
            var CurrentPage = pageRouteHelper?.Page as T;
            return CurrentPage;
        }
        public static T GetContentFromReference<T>(ContentReference contentRef) where T : BlockData
        {
            var contentLoader = EPiServer.ServiceLocation.ServiceLocator.Current.GetService<IContentLoader>();

            return contentLoader?.Get<T>(contentRef);
        }
        public static object GetPropValueByString(object src, string propName)
        {
            return src.GetType().GetProperty(propName)?.GetValue(src, null);
        }

        public static ContentReference GetDescendantPath(this ContentReference root, string path)
        {
            var segments = path.Split(new[] { '/' }, StringSplitOptions.RemoveEmptyEntries);
            var currentReference = root;

            foreach (var segment in segments)
            {
                currentReference = FindChild(currentReference, segment);
                if (ContentReference.IsNullOrEmpty(currentReference))
                {
                    break;
                }
            }
            return currentReference;
        }

        private static ContentReference FindChild(ContentReference parent, string name)
        {
            var children = ServiceLocator.Current.GetInstance<IContentLoader>().GetChildren<IContent>(parent);
            foreach (var child in children)
            {
                if (child.Name.Equals(name, StringComparison.OrdinalIgnoreCase))
                {
                    return child.ContentLink;
                }
            }
            return ContentReference.EmptyReference;
        }

        public static IContent GetContentByGuid(string id)
        {
            var contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
            try
            {
                Guid item;
                if (Guid.TryParse(id, out item))
                {
                    return contentLoader.Get<IContent>(item);
                }
                return null;
            }
            catch (Exception)
            {
                return null;
            }
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

        public static IContent GetContentReferenceByID(string ID)
        {
            var contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
            if (int.TryParse(ID, out int itemId))
            {
                var reference = new ContentReference(itemId);
                if (contentLoader.TryGet<IContent>(reference, out var content))
                {
                    return content;
                }
            }
            return null;
        }

        public static string GetCurrencySymbol(string isoCode)
        {
            try
            {
                if (!string.IsNullOrWhiteSpace(isoCode))
                {
                    RegionInfo regionInfo = new RegionInfo(isoCode);
                    return regionInfo?.ISOCurrencySymbol;
                }
            }
            catch (Exception ex)
            {
                return string.Empty;
            }
            return string.Empty;
        }
        public static T GetParentWithTemplate<T>(ContentReference currentPageReference) where T : PageData
        {
            if (currentPageReference == null || PageReference.IsNullOrEmpty(currentPageReference))
            {
                return null;
            }

            var contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
            var content = contentLoader.Get<IContent>(currentPageReference).ParentLink;

            while (content != null && !PageReference.IsNullOrEmpty(content))
            {
                var parentContent = contentLoader.Get<IContent>(content);

                if (parentContent is T parentPage)
                {
                    return parentPage;
                }

                content = parentContent?.ParentLink;
            }

            return null;
        }
    }
}
