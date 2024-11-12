using EPiServer.Core.Internal;
using EPiServer.Find;
using EPiServer.ServiceLocation;
using EPiServer.Web.Mvc;
using FEO.CMS.HBG.Business.Helpers;
using FEO.CMS.HBG.Business.Helpers.Interfaces;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Pages;
using FEO.CMS.HBG.Models;
using FEO.CMS.HBG.ViewModels;
using Microsoft.AspNetCore.Mvc;

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
            viewModel.Config = _contentLoader.Get<HBGStyleConfigBlock>(site.BackgroundConfig);
            SearchParam searchParam = new SearchParam()
            {
                PageSize = DeviceUtil.IsSmallDevice() ? currentBlock.PageSizeForMobile : currentBlock.PageSize,
                Language = System.Globalization.CultureInfo.CurrentCulture.Name,
                PageNumber = 1,
                Type = "blog"
            };
           
            var results = _searchHelper.SearchBlog(searchParam);
            return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGBlogListingBlock/index.cshtml", viewModel);
        }
    }
}
