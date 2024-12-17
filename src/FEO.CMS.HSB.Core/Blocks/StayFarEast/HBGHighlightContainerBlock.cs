using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGHighlightContainerBlock", GUID = "E6CD041B-EC4C-41DB-AFFC-3F12DE55D341", GroupName = "Hospitality")]
    public class HBGHighlightContainerBlock : HBGHighlightContainerConfigBlock
    {
        [Display(Name = "HighlightContentArea", Description = "highlight", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea HighlightContentArea { get; set; }
    }
}
