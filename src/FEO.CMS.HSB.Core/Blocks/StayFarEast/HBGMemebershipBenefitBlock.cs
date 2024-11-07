using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGMemebershipBenefitBlock", GUID = "2777BFAA-1816-47BA-B3E0-2EEF5E1B031D", GroupName = "Hospitality")]
    public class HBGMemebershipBenefitBlock : HBGCTAGeneralBlock
    {
        [Display(Name = "Benefits", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [AllowedTypes(AllowedTypes = new[] { typeof(HBGBenefitItemBlock) })]
        public virtual ContentArea Benefits { get; set; }

    }
}
