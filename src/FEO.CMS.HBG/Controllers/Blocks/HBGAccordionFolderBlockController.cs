using EPiServer.Core.Internal;
using EPiServer.Find.Cms.Statistics;
using EPiServer.Web.Mvc;
using EPiServer.Web.Mvc.Html;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Blocks.Village;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Models;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Storage;

namespace FEO.CMS.HBG.Controllers.Blocks
{
    public class HBGAccordionFolderBlockController : BlockComponent<HBGAccordionFolderBlock>
    {
        private readonly IUrlResolver _urlResolver;
        private readonly IContentLoader _contentLoader;
        private readonly IContentRepository _contentRepository;
        public HBGAccordionFolderBlockController(IUrlResolver urlResolver, IContentLoader contentLoader, IContentRepository contentRepository)
        {
            _urlResolver = urlResolver;
            _contentLoader = contentLoader;
            _contentRepository = contentRepository;
        }
        protected override IViewComponentResult InvokeComponent(HBGAccordionFolderBlock currentBlock)
        {
            HBGAccordionFolderBlock model = new HBGAccordionFolderBlock();

            var faq = _contentLoader.GetChildren<HBGAccordionBlock>((currentBlock as IContent)?.ContentLink);
            Faq faqs = new Faq() { MainEntity = new List<MainEntity>() };

            foreach (var item in faq)
            {
                if (!string.IsNullOrEmpty(item.Title) && item.Description != null)
                    faqs.MainEntity.Add(new MainEntity() { Name = item.Title, Answer = new Answer() { Text = item.Description.ToString() } });
            }
            HBGAccordionFolderBlock faqViewModel = new HBGAccordionFolderBlock()
            {
                Faq = faqs

            };
            return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGAccordionFolderBlock/index.cshtml", model);
        }
    }
}
