using EPiServer.Framework;
using EPiServer.Framework.Initialization;
using EPiServer.ServiceLocation;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Pages.StayFarEast;

namespace FEO.CMS.HBG.Business.InitializationModules
{
    [InitializableModule]
    [ModuleDependency(typeof(EPiServer.Web.InitializationModule))]
    public class PublishContentInitialization : IInitializableModule
    {
        public void Initialize(InitializationEngine context)
        {
            var contentEvents = ServiceLocator.Current.GetInstance<IContentEvents>();
            contentEvents.PublishingContent += ContentEvents_PublishingContent;
        }
        private void ContentEvents_PublishingContent(object sender, ContentEventArgs e)
        {
            var _contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();

            if (e.Content is HBGBlogDetailPage hBGBlogDetailPage)
            {
                if (hBGBlogDetailPage.Location != null)
                {
                    var locationsToIndex = hBGBlogDetailPage.Location.FilteredItems
                        .Select(catItem => catItem.LoadContent() as HBGNameValuePairBlock)
                        .Where(content => content != null)
                        .Select(content => content.Name)
                        .ToList();
                    hBGBlogDetailPage.SearchIndexLocation = locationsToIndex;
                }
                if (hBGBlogDetailPage.Season != null)
                {
                    var SeasonsToIndex = hBGBlogDetailPage.Season.FilteredItems
                        .Select(catItem => catItem.LoadContent() as HBGNameValuePairBlock)
                        .Where(content => content != null)
                        .Select(content => content.Name)
                        .ToList();
                    hBGBlogDetailPage.SearchIndexSeason = SeasonsToIndex;
                }
                if (hBGBlogDetailPage.Purpose != null)
                {
                    var purposesToIndex = hBGBlogDetailPage.Purpose.FilteredItems
                        .Select(catItem => catItem.LoadContent() as HBGNameValuePairBlock)
                        .Where(content => content != null)
                        .Select(content => content.Name)
                        .ToList();
                    hBGBlogDetailPage.SearchIndexPurpose = purposesToIndex;
                }
                if (hBGBlogDetailPage.Type != null)
                {
                    var typeToIndex = hBGBlogDetailPage.Type.FilteredItems
                        .Select(catItem => catItem.LoadContent() as HBGNameValuePairBlock)
                        .Where(content => content != null)
                        .Select(content => content.Name)
                        .ToList();
                    hBGBlogDetailPage.SearchIndexType = typeToIndex;
                }
            }

        }
        public void Uninitialize(InitializationEngine context)
        {
            // Add uninitialization logic
        }
    }
}
