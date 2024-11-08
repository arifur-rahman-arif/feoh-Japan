using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGCTABlock", GUID = "762D29FA-ADBE-4FC7-8FB2-EC0D443D6ABC", GroupName = "Hospitality")]
    public class HBGCTABlock : HBGBaseBlock
    {
        [Display(Name = "First CTA", GroupName = "Events", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem FirstCTA { get; set; }

        [Display(Name = "Second CTA", GroupName = "Events", Order = 200)]
        [CultureSpecific]
        public virtual LinkItem SecondCTA { get; set; }

        [Display(Name = "Contact Number Override", GroupName = "Events", Order = 300)]
        [CultureSpecific]
        public virtual string ContactNumberOverride { get; set; }

    }
}
