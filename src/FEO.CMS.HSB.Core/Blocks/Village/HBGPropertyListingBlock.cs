using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGPropertyListingBlock", GUID = "80A2DDF9-4757-43D0-BFD3-F689D131F905", GroupName = "Hospitality")]
    public class HBGPropertyListingBlock : HBGBaseBlock
    {
        [Display(Name = "Hotel Listing", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        public virtual ContentArea HotelListing { get; set; }

        [Display(Name = "Residence Listing", GroupName = "Content", Order = 500)]
        [CultureSpecific]
        public virtual ContentArea ResidenceListing { get; set; }

    }
}
