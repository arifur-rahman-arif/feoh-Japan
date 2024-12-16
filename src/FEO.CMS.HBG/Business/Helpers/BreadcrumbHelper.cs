using EPiServer.ServiceLocation;
using FEO.CMS.HBG.Core.Pages;

namespace FEO.CMS.HBG.Business.Helpers
{
    public static class BreadcrumbHelper
    {
        private static readonly IContentLoader ContentLoader;
        static BreadcrumbHelper()
        {
            ContentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
        }
        /// <summary>
        /// Retrieves the breadcrumb navigation for a given page reference. 
        /// This method generates the breadcrumb trail by iterating through the parent pages of the current page.
        /// </summary>
        /// <param name="currentPageReference">The content reference of the current page.</param>
        /// <returns>A list of BasePage objects representing the breadcrumb trail.</returns>
        public static IEnumerable<HBGBasePage> GetBreadcrumb(ContentReference currentPageReference)
        {
            var breadcrumb = new List<HBGBasePage>();
            var currentPage = ContentLoader.Get<HBGBasePage>(currentPageReference);
            while (currentPage != null && !ContentReference.IsNullOrEmpty(currentPage.ParentLink))
            {
                breadcrumb.Insert(0, currentPage); // Insert at the beginning

                var currentPageType = ContentLoader.Get<PageData>(currentPage.ParentLink);
                if (currentPageType is HBGSite || currentPage.Name == "Content" || !currentPage.ShowInBreadcrumb)
                    break;
                currentPage = ContentLoader.Get<HBGBasePage>(currentPage.ParentLink);
            }
            return breadcrumb;
        }

        public static string GetBreadcrumbName(HBGBasePage item)
        {
            return string.IsNullOrWhiteSpace(item.Title) ? item.Name : item.Title;
        }
    }
}
