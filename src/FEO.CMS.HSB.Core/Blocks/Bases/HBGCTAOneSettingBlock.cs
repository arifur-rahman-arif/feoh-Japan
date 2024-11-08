using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGCTAOneSettingBlock", GUID = "A0ECDBA2-0C12-4933-B981-7D9D15EAB32A", GroupName = "Hospitality")]
    public class HBGCTAOneSettingBlock : HBGBaseBlock
    {
        [Display(Name = "CTA Enable", GroupName = "CTA One", Order = 50)]
        [CultureSpecific]
        public virtual bool CTAEnable { get; set; }

        [Display(Name = "CTA Title", GroupName = "CTA One", Order = 100)]
        [CultureSpecific]
        public virtual string CTATitle { get; set; }

        [Display(Name = "CTA Link", GroupName = "CTA One", Order = 200)]
        [CultureSpecific]
        public virtual LinkItem CTALink { get; set; }

        [Display(Name = "CTA Color", GroupName = "CTA One", Order = 300)]
        [CultureSpecific]
        public virtual ContentReference CTAColor { get; set; }

        [Display(Name = "Use As Modal Button", GroupName = "CTA One", Order = 500)]
        [CultureSpecific]
        public virtual bool UseAsModalButton { get; set; }

        [Display(Name = "CTA Modal Form Id", GroupName = "CTA One", Order = 600)]
        [CultureSpecific]
        public virtual string CTAModalFormId { get; set; }

    }
}
