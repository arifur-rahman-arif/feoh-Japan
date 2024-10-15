using EPiServer.ServiceLocation;

namespace FEO.CMS.HBG.Business.ExtensionMethods
{
    public static class SectionExtensionMethods
    {
        // Gets the top level page of the section this page is in. Used to build our submenu.
        public static IContent GetSection(this ContentReference contentLink)
        {
            var loader = ServiceLocator.Current.GetInstance<IContentLoader>();
            var currentContent = loader.Get<IContent>(contentLink);
            if (currentContent.ParentLink != null && currentContent.ParentLink.CompareToIgnoreWorkID(ContentReference.StartPage))
            {
                return currentContent;
            }

            return loader.GetAncestors(contentLink)
                .OfType<PageData>()
                .SkipWhile(x => x.ParentLink == null || !x.ParentLink.CompareToIgnoreWorkID(ContentReference.StartPage))
                .FirstOrDefault();
        }

        public static bool IsDescendantOrSelf(this ContentReference reference, ContentReference potentialAncestor, IContentLoader contentLoader)
        {
            if (ContentReference.IsNullOrEmpty(reference) || ContentReference.IsNullOrEmpty(potentialAncestor))
            {
                return false;
            }

            if (reference.CompareToIgnoreWorkID(potentialAncestor))
            {
                return true;
            }

            var ancestors = contentLoader.GetAncestors(reference);
            return ancestors.Any(x => x.ContentLink.CompareToIgnoreWorkID(potentialAncestor));
        }
    }
}
