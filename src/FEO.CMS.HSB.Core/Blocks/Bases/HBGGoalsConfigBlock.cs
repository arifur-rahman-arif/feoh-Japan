using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGGoalsConfigBlock", GUID = "072EDF47-EDB2-4939-8108-98A196BE2DD4", GroupName = "Hospitality")]
    public class HBGGoalsConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Book Now Goal", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference BookNowGoal { get; set; }

        [Display(Name = "CTA Goal", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual ContentReference CTAGoal { get; set; }

    }
}
