using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGCTATwoSettingBlock", GUID = "E9D73042-F61F-4FFC-A12E-27171A162099", GroupName = "Hospitality")]
    public class HBGCTATwoSettingBlock : HBGAlignmentImageConfigBlock
    {
        [Display(Name = "CTA Enable", GroupName = "CTA Two", Order = 50)]
        [CultureSpecific]
        public virtual bool CTAEnable2 { get; set; }

        [Display(Name = "CTA Title", GroupName = "CTA Two", Order = 100)]
        [CultureSpecific]
        public virtual string CTATitle2 { get; set; }

        [Display(Name = "CTA Link", GroupName = "CTA Two", Order = 200)]
        [CultureSpecific]
        public virtual LinkItem CTALink2 { get; set; }

        [Display(Name = "CTA Color", GroupName = "CTA Two", Order = 300)]
        [CultureSpecific]
        public virtual ContentReference CTAColor2 { get; set; }

        [Display(Name = "Use As Modal Button", GroupName = "CTA Two", Order = 500)]
        [CultureSpecific]
        public virtual bool UseAsModalButton2 { get; set; }

        [Display(Name = "CTA Modal Form Id", GroupName = "CTA Two", Order = 600)]
        [CultureSpecific]
        public virtual string CTAModalFormId2 { get; set; }

    }
}
