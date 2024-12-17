using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Models;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGAccordionFolderBlock", GUID = "39433501-4BBA-4E2C-887D-81C397A4146D", GroupName = "Hospitality")]
    public class HBGAccordionFolderBlock : HBGAccordionConfigBlock
    {
        [Ignore]
        public virtual Faq Faq { get; set; }

        [Display(Name = "ChildrenFolderReference", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference ChildrenFolderReference { get; set; }
    }
}
