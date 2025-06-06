using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGBackgroundConfigBlock", GUID = "EC86F65D-6D7D-428A-B767-5BDFF428F46D", GroupName = "Hospitality")]
    public class HBGBackgroundConfigBlock : HBGStickySummaryConfigBlock
    {
        [Display(Name = "Background Color", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference BackgroundColor { get; set; }

    }
}
