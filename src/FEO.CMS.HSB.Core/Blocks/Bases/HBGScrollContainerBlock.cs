using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGScrollContainerBlock", GroupName = "Hospitality")]
    public class HBGScrollContainerBlock : HBGHighlightContainerConfigBlock
    {
        [Display(Name = "Scroll", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Scroll { get; set; }

    }
}
