using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationMastHeadConfigBlock", GUID = "028F4FDE-04A4-4A46-9E69-F2C1550C8585", GroupName = "Hospitality")]
    public class HBGStaycationMastHeadConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Show", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual bool Show { get; set; }

    }
}
