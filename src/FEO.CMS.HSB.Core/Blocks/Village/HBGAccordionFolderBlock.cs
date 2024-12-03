using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Models;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGAccordionFolderBlock", GUID = "39433501-4BBA-4E2C-887D-81C397A4146D", GroupName = "Hospitality")]
    public class HBGAccordionFolderBlock : HBGAccordionConfigBlock
    {
        public virtual Faq Faq { get; set; }
    }
}
