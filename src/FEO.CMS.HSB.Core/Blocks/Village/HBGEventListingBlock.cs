using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGEventListingBlock", GUID = "E5E0BBD3-805A-46A4-B21A-4A451693FF7C", GroupName = "Hospitality")]
    public class HBGEventListingBlock : HBGBaseBlock
    {
        [Display(Name = "Venue Listing", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea VenueListing { get; set; }

    }
}
