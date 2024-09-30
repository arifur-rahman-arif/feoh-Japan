using EPiServer.Data;
using EPiServer.ServiceLocation;
using EPiServer.Web;
using EPiServer.Web.Routing;
using FEO.CMS.HBG.Core.Models;
using FEO.CMS.HBG.Core.Pages;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace FEO.CMS.HBG.Business
{
    [ServiceConfiguration]
    public class PageViewContextFactory
    {
        private readonly IContentLoader _contentLoader;
        private readonly UrlResolver _urlResolver;
        private readonly IDatabaseMode _databaseMode;
        private readonly CookieAuthenticationOptions _cookieAuthenticationOptions;

        public PageViewContextFactory(
            IContentLoader contentLoader,
            UrlResolver urlResolver,
            IDatabaseMode databaseMode,
            IOptionsMonitor<CookieAuthenticationOptions> optionMonitor)
        {
            _contentLoader = contentLoader;
            _urlResolver = urlResolver;
            _databaseMode = databaseMode;
            _cookieAuthenticationOptions = optionMonitor.Get(IdentityConstants.ApplicationScheme);
        }

        public virtual LayoutModel CreateLayoutModel(ContentReference currentContentLink, HttpContext httpContext)
        {
            var startPageContentLink = SiteDefinition.Current.StartPage;

            // Use the content link with version information when editing the startpage,
            // otherwise the published version will be used when rendering the props below.
            if (currentContentLink.CompareToIgnoreWorkID(startPageContentLink))
            {
                startPageContentLink = currentContentLink;
            }

            var startPage = _contentLoader.Get<IContent>(startPageContentLink);

            var homePageData = _contentLoader.Get<HBGBasePage>(startPageContentLink);
            return new LayoutModel
            {
                Header = homePageData.Header,
                Footer = homePageData.Footer
            };
        }

        public virtual IContent GetSection(ContentReference contentLink)
        {
            var currentContent = _contentLoader.Get<IContent>(contentLink);

            static bool isSectionRoot(ContentReference contentReference) =>
               ContentReference.IsNullOrEmpty(contentReference) ||
               contentReference.Equals(SiteDefinition.Current.StartPage) ||
               contentReference.Equals(SiteDefinition.Current.RootPage);

            if (isSectionRoot(currentContent.ParentLink))
            {
                return currentContent;
            }

            return _contentLoader.GetAncestors(contentLink)
                .OfType<PageData>()
                .SkipWhile(x => !isSectionRoot(x.ParentLink))
                .FirstOrDefault();
        }
    }
}
