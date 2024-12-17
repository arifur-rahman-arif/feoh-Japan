using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStickySummaryConfigBlock", GUID = "7886D517-9056-44F0-88D9-157686D4B5BD", GroupName = "Hospitality")]
    public class HBGStickySummaryConfigBlock : HBGRootBlock
    {
        [Display(Name = "Sticky Summary Text", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual string StickySummaryText { get; set; }

    }
}
