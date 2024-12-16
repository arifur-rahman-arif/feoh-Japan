using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGListingResultsConfigBlock", GUID = "16312D5B-2242-48D5-AC3B-F4A887F86014", GroupName = "Hospitality")]
    public class HBGListingResultsConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Listing Type", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference ListingType { get; set; }

        [Display(Name = "Listing Datasource", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual string ListingDatasource { get; set; }

    }
}
