using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGModalPopupBlock", GroupName = "Hospitality")]
    public class HBGModalPopupBlock : HBGHighlightContainerConfigBlock
    {
        [Display(Name = "Modal", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Modal { get; set; }

    }
}
