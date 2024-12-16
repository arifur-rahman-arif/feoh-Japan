using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGDealListingConfigBlock", GUID = "D70F0300-B491-4449-A915-FBBEB3DBFC89", GroupName = "Hospitality")]
    public class HBGDealListingConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Area", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Area { get; set; }

    }
}
