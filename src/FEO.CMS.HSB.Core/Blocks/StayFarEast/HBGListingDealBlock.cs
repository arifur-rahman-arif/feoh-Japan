using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGListingDealBlock", GUID = "A5B54E27-82D2-4E2B-84B8-4F04C12AE8A8", GroupName = "Hospitality")]
    public class HBGListingDealBlock : HBGBaseBlock
    {
        [Display(Name = "Deal", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Deal { get; set; }

        [Display(Name = "Redirect URL", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem RedirectURL { get; set; }

        [Display(Name = "Show All Deals Button", GroupName = "Buttons", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem ShowAllDealsButton { get; set; }

    }
}
