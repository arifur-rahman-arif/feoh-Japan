using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStayFarEastItemDetailConfigBlock", GUID = "ED5F0F1A-45D0-45EB-84E9-5C8D76806F6B", GroupName = "Hospitality")]
    public class HBGStayFarEastItemDetailConfigBlock : HBGBaseBlock
    {
        [Display(Name = "StayFarEast Item Link", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual string StayFarEastItemLink { get; set; }

        [Display(Name = "Hide Category", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual bool HideCategory { get; set; }

        [Display(Name = "Divider Colors", GroupName = SystemTabNames.Settings, Order = 300)]
        [CultureSpecific]
        public virtual ContentReference DividerColors { get; set; }

        [Display(Name = "CTA Colors", GroupName = SystemTabNames.Settings, Order = 400)]
        [CultureSpecific]
        public virtual ContentReference CTAColors { get; set; }

    }
}
