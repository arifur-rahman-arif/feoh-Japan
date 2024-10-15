using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGArticleResultsConfigBlock", GUID = "B5392377-354B-4330-A04F-001D7F48DA98", GroupName = "Hospitality")]
    public class HBGArticleResultsConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Listing Type", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference ListingType { get; set; }

    }
}
