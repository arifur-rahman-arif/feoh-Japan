using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGListingConfigBlock", GUID = "6368699E-F620-407B-A85B-1882C937C6AC", GroupName = "Hospitality")]
    public class HBGListingConfigBlock : HBGBaseBlock
    {
        [Display(Name = "CTA Color", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference CTAColor { get; set; }

        [Display(Name = "SHOW MORE Link Color", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual ContentReference SHOWMORELinkColor { get; set; }

    }
}
