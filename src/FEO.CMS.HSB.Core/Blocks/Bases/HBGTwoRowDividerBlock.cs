using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGTwoRowDividerBlock", GroupName = "Hospitality")]
    public class HBGTwoRowDividerBlock : HBGBaseBlock
    {
        [Display(Name = "Row1", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Row1 { get; set; }

        [Display(Name = "Row2", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual ContentArea Row2 { get; set; }

    }
}
