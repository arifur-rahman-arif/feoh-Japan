using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGVenueListingBlock", GUID = "7A71071A-9087-408C-87D3-06283BF639AF", GroupName = "Hospitality")]
    public class HBGVenueListingBlock : HBGBaseBlock
    {
        [Display(Name = "Venue Listing", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea VenueListing { get; set; }

        [Display(Name = "See All Venues", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        public virtual LinkItem SeeAllVenues { get; set; }

    }
}
