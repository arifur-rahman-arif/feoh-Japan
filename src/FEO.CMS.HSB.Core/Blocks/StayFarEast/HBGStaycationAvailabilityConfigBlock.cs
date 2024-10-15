using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationAvailabilityConfigBlock", GUID = "38158A9C-FD02-4926-BF81-A9D7B55A4E2D", GroupName = "Hospitality")]
    public class HBGStaycationAvailabilityConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Show", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual bool Show { get; set; }

    }
}
