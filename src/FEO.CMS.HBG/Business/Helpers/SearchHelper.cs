using EPiServer.Find;
using EPiServer.Find.Framework;
using FEO.CMS.HBG.Business.Helpers.Interfaces;
using FEO.CMS.HBG.Models;
using EPiServer.Logging;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using EPiServer.Globalization;
using EPiServer.Find.Cms;

namespace FEO.CMS.HBG.Business.Helpers
{
    public class SearchHelper: ISearchHelper
    {
        #region Private Members
        private readonly IClient _client;
        private readonly IContentLoader _contentLoader;
        private static readonly EPiServer.Logging.ILogger _logger = LogManager.GetLogger(typeof(SearchHelper));
        private bool _disposed;

        #endregion

        #region Constructors
        /// <summary>
        /// Constructor
        /// </summary>
        public SearchHelper(IContentLoader contentLoader)
        {
            //do not create new instance of IClient, Instead, use SearchClient.Instance to get an instance of IClient, configured through an initialization module in EPiServer.Find.Cms
            _client = SearchClient.Instance;
            _contentLoader = contentLoader;
            _disposed = false;
        }
        #endregion
        #region Public Methods
        ~SearchHelper()
        {
            Dispose(false);
        }
        public static bool ContainsAny(string s, List<string> substrings)
        {
            if (string.IsNullOrEmpty(s) || substrings == null)
                return false;

            return substrings.Any(substring => s.Contains(substring, StringComparison.OrdinalIgnoreCase));
        }

        private Dictionary<string, IEnumerable<string>> GetBlogFacets(ISearchResults<BlogSearchResult> searchData)
        {
            if (searchData != null && searchData.TermsFacet != null)
            {
                return searchData.TermsFacet.ToDictionary(facet => facet.Field, facet => facet.Terms.Select(x => x.Term));
            }
            return null;
        }
        public IEnumerable<BlogItemModel> SearchBlog(SearchParam searchParam)
        {
            
            try
            {
                string language = string.IsNullOrEmpty(searchParam.Language) ? "en" : searchParam.Language;

                _logger.Information($"Blog Search Start | Lang: {language}");

                if (searchParam == null)
                    throw new ArgumentNullException(nameof(searchParam));
                var query = _client.Search<HBGBlogDetailPage>()
                       .Filter(x => x.MatchTypeHierarchy(typeof(HBGBlogDetailPage)))
                    .FilterOnLanguages(new string[] { language })
                    .FilterHits(expired => !expired.StopPublish.Exists());

                if (searchParam.Filters != null)
                {
                    foreach (var filter in searchParam.Filters)
                    {
                        switch (filter.Name)
                        {
                            case "location":
                                query = query.Filter(x => x.locations.In(filter.Value));
                                break;
                            case "season":
                                query = query.Filter(x => x.Season.In(filter.Value));
                                break;
                            case "type":
                                query = query.Filter(x => x.Type.In(filter.Value));
                                break;
                            case "purpose":
                                query = query.Filter(x => x.Purpose.In(filter.Value));
                                break;
                            case "orderby":
                                query = filter.Value.Contains("descending")
                                    ? query.OrderByDescending(x => x.FirstPublishDate)
                                    : query.OrderBy(x => x.FirstPublishDate);
                                break;
                        }
                    }
                }

                var result = query.Take(searchParam.PageSize)
                    .Skip((searchParam.PageNumber - 1) * searchParam.PageSize)
                    .GetResult();

                var filterOptions = GetBlogFacets(result);

                var searchResult = new SearchResult<BlogItem>
                {
                    TotalCount = result.TotalMatching,
                    Facets = filterOptions
                };

                searchResult.Results = result.Items.Select(hit => new BlogItem
                {
                    Title = hit.Title,
                    Summary = hit.Summary,
                    SmallThumbnail = hit.SmallThumbnail,
                    MediumThumbnail = hit.MediumThumbnail,
                    LargeThumbnail = hit.LargeThumbnail,
                    Url = !string.IsNullOrEmpty(hit.Url) ? hit.Url : string.Empty,
                    Tags = hit.Tags,
                    AlternateUrl = new Link { Url = hit.AlternateUrl }
                }).ToList();

                _logger.Information("Blog Search Completed");

                return searchResult;
            }
            catch (Exception ex)
            {
                _logger.Error("Blog Search Error", ex);
                return null;
            }
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        private void Dispose(bool disposing)
        {
            if (_disposed)
                return;

            if (disposing)
            {
                // Release managed resources if any
            }

            _disposed = true;
        }
        #endregion

    }
}
