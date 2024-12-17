using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGAccordionConfigBlock", GUID = "8E268052-64E6-4EFB-B77F-6CCEABB12D30", GroupName = "Hospitality")]
    public class HBGAccordionConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Show SeeAll Accordions Button", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool ShowSeeAllAccordionsButton { get; set; }

    }
}
