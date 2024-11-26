using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGQuoteBlock", GUID = "1FD30FCA-8AAE-4B4D-BF27-CB0E63F4EF9D", GroupName = "Hospitality")]
    public class HBGQuoteBlock : HBGQuoteConfigBlock
    {
        [Display(Name = "Quote", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string Quote { get; set; }

    }
}
