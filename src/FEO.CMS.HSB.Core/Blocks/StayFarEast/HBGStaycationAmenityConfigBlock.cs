using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationAmenityConfigBlock", GUID = "293D54E5-14BF-44A3-B048-369B44483486", GroupName = "Hospitality")]
    public class HBGStaycationAmenityConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Show", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual bool Show { get; set; }

    }
}
