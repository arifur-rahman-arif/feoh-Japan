using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGCTATextColorConfigBlock", GUID = "4E4CA3E5-1A5E-4496-AFD5-FC14C01DFD09", GroupName = "Hospitality")]
    public class HBGCTATextColorConfigBlock : HBGBaseBlock
    {
        [Display(Name = "CTATextColor", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference CTATextColor { get; set; }

    }
}
