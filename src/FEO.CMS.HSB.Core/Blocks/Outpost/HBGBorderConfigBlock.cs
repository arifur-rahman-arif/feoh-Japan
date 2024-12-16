using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGBorderConfigBlock", GUID = "FC5C5EB3-AAC4-4A07-8125-B180F6AF6C3E", GroupName = "Hospitality")]
    public class HBGBorderConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Apply Gold Border Color", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool ApplyGoldBorderColor { get; set; }

    }
}
