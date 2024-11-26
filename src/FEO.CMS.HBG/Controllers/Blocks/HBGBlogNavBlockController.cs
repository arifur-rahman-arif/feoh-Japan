using EPiServer.Find.Cms.Statistics;
using EPiServer.Web.Mvc;
using EPiServer.Web.Mvc.Html;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using Microsoft.AspNetCore.Mvc;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGBlogNavBlockController : BlockComponent<HBGBlogNavBlock>
    {
        private readonly IUrlResolver _urlResolver;
        private readonly IContentLoader _contentLoader;
        private readonly IContentRepository _contentRepository;
        public HBGBlogNavBlockController(IUrlResolver urlResolver, IContentLoader contentLoader, IContentRepository contentRepository)
        {
            _urlResolver = urlResolver;
            _contentLoader = contentLoader;
            _contentRepository = contentRepository;
        }
        protected override IViewComponentResult InvokeComponent(HBGBlogNavBlock currentBlock)
        {
            HBGBlogNavBlock model = new HBGBlogNavBlock();

            // Get current page
            var currentPage = _contentLoader.Get<HBGBlogDetailPage>((currentBlock as IContent)?.ParentLink);
            model.CurrentItem = currentPage;

            // Find previous and next siblings
            var siblings = _contentLoader.GetChildren<HBGBlogDetailPage>(model.CurrentItem.ParentLink).ToList();
            var currentIndex = siblings.IndexOf(currentPage);

            if (currentIndex > 0)
            {
                var previousItem = siblings[currentIndex - 1];
                if (previousItem != null)
                {
                    model.PreviousItemUrl = Url.ContentUrl(previousItem.ContentLink);
                    model.PreviousItemTitle = previousItem.Title;
                }
            }

            if (currentIndex < siblings.Count - 1)
            {
                var nextItem = siblings[currentIndex + 1];
                if (nextItem != null)
                {
                    model.NextItemUrl = Url.ContentUrl(nextItem.ContentLink);
                    model.NextItemTitle = nextItem.Title;
                }
            }

            return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGBlogNavBlock/index.cshtml", model);
        }
    }
}
