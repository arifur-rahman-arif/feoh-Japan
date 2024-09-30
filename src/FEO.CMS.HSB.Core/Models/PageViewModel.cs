using EPiServer.Core;
using FEO.CMS.HBG.Core.Pages;

namespace FEO.CMS.HBG.Core.Models
{
    public class PageViewModel<T> : IPageViewModel<T> where T : HBGBasePage
    {
        public PageViewModel(T currentPage)
        {
            CurrentPage = currentPage;
        }

        public T CurrentPage { get; private set; }

        public LayoutModel Layout { get; set; }

        public IContent Section { get; set; }
        public ContentArea Header { get; set; } // For dynamic header content
        public ContentArea Footer { get; set; } // For dynamic footer content
    }

    public static class PageViewModel
    {
        /// <summary>
        /// Returns a PageViewModel of type <typeparam name="T"/>.
        /// </summary>
        /// <remarks>
        /// Convenience method for creating PageViewModels without having to specify the type as methods can use type inference while constructors cannot.
        /// </remarks>
        public static PageViewModel<T> Create<T>(T page)
            where T : HBGBasePage => new(page);
    }
}

