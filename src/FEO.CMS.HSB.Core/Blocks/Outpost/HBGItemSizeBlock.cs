using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGItemSizeBlock", GUID = "3BCE9C39-55B4-4A5C-A7D5-914A03342212", GroupName = "Hospitality")]
    public class HBGItemSizeBlock : HBGBaseBlock
    {
        [Display(Name = "Item Size", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual string ItemSize { get; set; }

    }
}
