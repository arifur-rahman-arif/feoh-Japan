using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGSynxisFAQBlock", GUID = "45249673-874B-4295-AF24-63D0DCA8B578", GroupName = "Hospitality")]
    public class HBGSynxisFAQBlock : HBGBaseBlock
    {
        [Display(Name = "Question", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string Question { get; set; }

        [Display(Name = "Answer", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Answer { get; set; }

        [Display(Name = "Category", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual ContentArea Category { get; set; }

    }
}
