using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationHighlightsConfigBlock", GUID = "B526F546-ED11-4AB5-8BF5-0E713702168E", GroupName = "Hospitality")]
    public class HBGStaycationHighlightsConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Show", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool Show { get; set; }

    }
}
