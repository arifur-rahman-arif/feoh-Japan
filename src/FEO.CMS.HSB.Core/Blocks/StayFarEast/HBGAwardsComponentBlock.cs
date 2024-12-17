using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.Quincy;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGAwardsComponentBlock", GUID = "1119FC83-F50C-4014-9378-0FF8C9C7FE8C", GroupName = "Hospitality")]
    public class HBGAwardsComponentBlock : HBGBaseBlock
    {
        [Display(Name = "Datasource", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Datasource { get; set; }
        [Ignore]
        public virtual IEnumerable<HBGAwardsBlock> Awards { get; set; }
    }
}
