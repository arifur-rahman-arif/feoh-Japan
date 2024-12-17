using EPiServer.Find.Cms.Statistics;
using EPiServer.Web.Mvc;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Blocks.Village;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Models;
using Microsoft.AspNetCore.Mvc;

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
            HBGAccordionFolderBlock model = null;

            if (currentBlock.ChildrenFolderReference != null)
            {
                var faq = _contentLoader.GetChildren<HBGAccordionBlock>(currentBlock.ChildrenFolderReference);
                Faq faqs = new Faq() { MainEntity = new List<MainEntity>() };

                foreach (var item in faq)
                {
                    if (!string.IsNullOrEmpty(item.Title) && item.Description != null)
                        faqs.MainEntity.Add(new MainEntity() { Name = item.Title, Answer = new Answer() { Text = item.Description } });
                }
                model = new HBGAccordionFolderBlock()
                {
                    Faq = faqs
                };
            }
            return View($"{ViewsPath.Hospitality_StayFarEast_BLOCKS_PATH}/HBGAccordionFolderBlock/index.cshtml", model);
        }
    }
}
