using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGDealParticipantConfigBlock", GUID = "6ADDAD3C-E5EB-4007-820B-1B31BEE11A69", GroupName = "Hospitality")]
    public class HBGDealParticipantConfigBlock : HBGBaseBlock
    {
        [Display(Name = "IsRibbon", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool IsRibbon { get; set; }

        [Display(Name = "IsRedirectToExistingSite", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual bool IsRedirectToExistingSite { get; set; }

    }
}
