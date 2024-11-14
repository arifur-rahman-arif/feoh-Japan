using EPiServer.Find;
using EPiServer.Find.Api.Facets;
using EPiServer.Find.Cms;
using EPiServer.Find.Framework;
using EPiServer.Logging;
using EPiServer.SpecializedProperties;
using EPiServer.Web.Routing;
using FEO.CMS.HBG.Business.Helpers.Interfaces;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using FEO.CMS.HBG.Models;

namespace FEO.CMS.HBG.Business.Helpers
{
    public class SearchHelper : ISearchHelper
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

        private Dictionary<string, IEnumerable<string>> GetBlogFacets(SearchResults<HBGBlogDetailPage> searchData)
        {
            if (searchData != null && searchData.Facets.Any())
            {
                Dictionary<string, IEnumerable<string>> filters = new Dictionary<string, IEnumerable<string>>();
                foreach (var facet in searchData.Facets)
                {
                    string name = facet.Name;
                    var terms = ((TermsFacet)facet).Terms.Select(x => x.Term).ToList();
                    filters.Add(name, terms);

                }


            }
            return null;
        }
        public SearchResult<BlogItemModel> SearchBlog(SearchParam searchParam)
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

                                var locations = filter.Value;
                                if (locations != null && locations.Any())
                                {
                                    foreach (var location in locations)
                                    {
                                        query = query.OrFilter(x => x.Location.Match(location));
                                    }

                                }
                                break;
                            case "season":
                                var seasons = filter.Value;
                                if (seasons != null && seasons.Any())
                                {
                                    foreach (var season in seasons)
                                    {
                                        query = query.Filter(x => x.Season.Match(season));
                                    }

                                }
                                break;
                            case "type":
                                var types = filter.Value;
                                if (types != null && types.Any())
                                {
                                    foreach (var type in types)
                                    {
                                        query = query.Filter(x => x.Type.Match(type));
                                    }

                                }
                                break;
                            case "purpose":
                                var purposes = filter.Value;
                                if (purposes != null && purposes.Any())
                                {
                                    foreach (var purpose in purposes)
                                    {
                                        query = query.Filter(x => x.Purpose.Match(purpose));
                                    }

                                }

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
                    .TermsFacetFor(x => x.SearchIndexLocation, facet => { facet.Size = 1000; })
                    .TermsFacetFor(x => x.SearchIndexPurpose, facet => { facet.Size = 1000; })
                    .TermsFacetFor(x => x.SearchIndexSeason, facet => { facet.Size = 1000; })
                    .TermsFacetFor(x => x.SearchIndexType, facet => { facet.Size = 1000; })
                    .GetResult();

                var filterOptions = GetBlogFacets(result);

                var searchResult = new SearchResult<BlogItemModel>
                {
                    TotalCount = result.TotalMatching,
                    Facets = filterOptions
                };

                searchResult.Results = result.Hits.Select(hit => new BlogItemModel
                {
                    Title = hit.Document.Title,
                    Summary = hit.Document.Summary,
                    SmallThumbnail = UrlResolver.Current.GetUrl(hit.Document.SmallThumbnail),
                    MediumThumbnail = UrlResolver.Current.GetUrl(hit.Document.MediumThumbnail),
                    LargeThumbnail = UrlResolver.Current.GetUrl(hit.Document.LargeThumbnail),
                    Tags = hit.Document.FeaturedTags,
                    AlternateUrl = new LinkItem
                    {
                        Href = hit.Document.AlternateURL.Href

                    }
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
