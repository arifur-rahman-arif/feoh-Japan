using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGPackageDetailPageConfigBlock", GUID = "AAA947E7-6A38-4BCF-8E4C-7D6B14F252AB", GroupName = "Hospitality")]
    public class HBGPackageDetailPageConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Show Adjacent Buttons", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool ShowAdjacentButtons { get; set; }

    }
}
