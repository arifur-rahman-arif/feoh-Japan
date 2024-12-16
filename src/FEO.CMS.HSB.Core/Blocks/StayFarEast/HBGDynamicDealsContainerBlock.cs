using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGDynamicDealsContainerBlock", GUID = "24CC7B2C-BC79-40C3-9D59-EB6E5B6697CA", GroupName = "Hospitality")]
    public class HBGDynamicDealsContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Result Count", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual double ResultCount { get; set; }

        [Display(Name = "See More Button Text", GroupName = "Buttons", Order = 100)]
        [CultureSpecific]
        public virtual string SeeMoreButtonText { get; set; }

    }
}
