using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGCTAGeneralBlock", GUID = "0FAB8510-B8BD-4CE5-A39D-743FA3C9520C", GroupName = "Hospitality")]
    public class HBGCTAGeneralBlock : HBGBaseBlock
    {
        [Display(Name = "CTA Title", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string CTATitle { get; set; }

        [Display(Name = "CTA Link", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual LinkItem CTALink { get; set; }

    }
}
