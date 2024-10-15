using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGStaticListingBlock", GUID = "C127CC7D-3552-468D-B249-8A513D47A019", GroupName = "Hospitality")]
    public class HBGStaticListingBlock : HBGBaseBlock
    {
        [Display(Name = "Listing Title", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string ListingTitle { get; set; }

        [Display(Name = "Listing Summary", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual XhtmlString ListingSummary { get; set; }

    }
}
