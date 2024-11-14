using EPiServer.Find;
using EPiServer.Web.Mvc;
using FEO.CMS.HBG.Business.Helpers;
using FEO.CMS.HBG.Business.Helpers.Interfaces;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Pages;
using FEO.CMS.HBG.Models;
using FEO.CMS.HBG.ViewModels;
using Microsoft.AspNetCore.Mvc;
using static FEO.CMS.HBG.Core.Constants.FieldNames;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGBlogListingBlockController : BlockComponent<HBGBlogListingBlock>
    {
        private readonly ISearchHelper _searchHelper;
        private readonly IContentLoader _contentLoader;
        private readonly IContentRepository _contentRepository;
        public HBGBlogListingBlockController(ISearchHelper searchhelper, IContentLoader contentLoader, IContentRepository contentRepository)
        {
            _searchHelper = searchhelper;
            _contentLoader = contentLoader;
            _contentRepository = contentRepository;
        }
        protected override IViewComponentResult InvokeComponent(HBGBlogListingBlock currentBlock)
        {
            var rootPageReference = ContentReference.StartPage;
            var sitePageReference = _contentRepository.Get<PageData>(rootPageReference).ParentLink;
            var site = _contentRepository.Get<HBGSite>(sitePageReference);

            var viewModel = new BlogListingViewModel();
            viewModel.Config = _contentLoader.Get<HBGBackgroundConfigBlock>(site.BackgroundConfig);
            SearchParam searchParam = new SearchParam()
            {
                PageSize = DeviceUtil.IsSmallDevice() ? currentBlock.PageSizeForMobile : currentBlock.PageSize,
                Language = System.Globalization.CultureInfo.CurrentCulture.Name,
                PageNumber = 1,
                Type = "blog"
            };

            var results = _searchHelper.SearchBlog(searchParam);
            var facets = results.Facets;
            PopulateFilter(viewModel, facets);
            return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGBlogListingBlock/index.cshtml", viewModel);
        }

        private void PopulateFilter(BlogListingViewModel viewModel, Dictionary<string, IEnumerable<string>> facets)
        {
            foreach (var facet in facets)
            {
                switch (facet.Key)
                {
                    case "location":
                        PopulateLocationFilter(viewModel, facet.Value);
                        break;
                    case "type":
                        var typeOptions = PopulateGenericFilter(facet, ItemIds.ArticleTypes);
                        viewModel.Types = typeOptions;
                        break;
                    case "season":
                        var seasonOptions = PopulateGenericFilter(facet, ItemIds.Seasons);
                        viewModel.Seasons = seasonOptions;
                        break;
                    case "purpose":
                        var purposeOptions = PopulateGenericFilter(facet, ItemIds.Purposes);
                        viewModel.Purposes = purposeOptions;
                        break;
                }
            }
            viewModel.OrderBy = SortOrderFilter(ItemIds.OrderBy);
        }

        private BlogFilterGroup SortOrderFilter(Guid orderBy)
        {
            throw new NotImplementedException();
        }

        private BlogFilterGroup PopulateGenericFilter(KeyValuePair<string, IEnumerable<string>> facet, Guid articleTypes)
        {
            BlogFilterGroup group = new BlogFilterGroup();
            group.Name = facet.Key;
            var groupReference = GetContentReferenceFromGuid(articleTypes);
            var groupItem = _contentLoader.GetChildren<HBGNameValuePairBlock>(groupReference);
            if (groupItem != null && groupItem.Any())
            {
                var options = groupItem
                 .Where(x => x.Equals(x.ContentTypeID)) // Use `ContentGuid` or `ContentReference`
                .Select(x => new BlogFilterOption
                {
                    Name = x.Title,
                    Value = x.ContentTypeID.ToString()
                });
                group.Options = options;
            }
            return group;
        }

        private void PopulateLocationFilter(BlogListingViewModel viewModel, IEnumerable<string> value)
        {
            var group = new BlogFilterGroup
            {
                Name = "location"
            };
            var countryReference = GetContentReferenceFromGuid(ItemIds.Countries);
            var countries = GetCountryBlocks(countryReference);
            if (countries == null || !countries.Any())
                return;
            var locations = countries
            .Where(x => x.Equals(x.ContentTypeID)) // Use `ContentGuid` or `ContentReference`
                .Select(x => new BlogFilterOption
                {
                    Name = x.Title,
                    Value = x.ContentTypeID.ToString()
                });

            group.Options = locations;
            viewModel.Locations = group;
        }
        public IEnumerable<HBGCountryBlock> GetCountryBlocks(ContentReference folderReference)
        {
            // Get children of the specified folder and filter by HBGCountryBlock type
            var countryBlocks = _contentLoader.GetChildren<HBGCountryBlock>(folderReference);

            return countryBlocks;
        }
        public ContentReference GetContentReferenceFromGuid(Guid folderGuid)
        {
            var contentRefernce = _contentLoader.Get<IContent>(folderGuid);
            // Use TryGet to ensure content exists for the provided GUID

            return contentRefernce.ContentLink;



        }
    }
}
