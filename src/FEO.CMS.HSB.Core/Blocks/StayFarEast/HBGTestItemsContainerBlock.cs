using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGTestItemsContainerBlock", GUID = "53A98548-F298-44D8-A4F1-D76E9144EA9B", GroupName = "Hospitality")]
    public class HBGTestItemsContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Featured TestItems", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea FeaturedTestItems { get; set; }

    }
}
