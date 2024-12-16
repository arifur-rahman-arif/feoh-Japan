using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGDividerConfigBlock", GUID = "FC2399C4-0DB2-46A1-B0B0-70F9EDDF96C7", GroupName = "Hospitality")]
    public class HBGDividerConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Divider Config", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference DividerConfig { get; set; }

    }
}
