using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGMemebershipBenefitBlock", GUID = "2777BFAA-1816-47BA-B3E0-2EEF5E1B031D", GroupName = "Hospitality")]
    public class HBGMemebershipBenefitBlock : HBGBaseBlock
    {
        [Display(Name = "Benefits", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Benefits { get; set; }

    }
}
