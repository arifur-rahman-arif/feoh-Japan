using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.Bases;
using FEO.CMS.HBG.Core.Models;
namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGAccordionBlock", GUID = "A8C07A9B-E0DA-4C7C-AD70-6300594B15C2", GroupName = "Hospitality")]
    public class HBGAccordionBlock : HBGRootBlock
    {
        [Ignore]
        public virtual Faq Faq { get; set; }
    }
}
