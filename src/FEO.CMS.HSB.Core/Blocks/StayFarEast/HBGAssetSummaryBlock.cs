using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGAssetSummaryBlock", GUID = "A8F122E3-92FD-4F6F-9D9A-9EBE22F73DAE", GroupName = "Hospitality")]
    public class HBGAssetSummaryBlock : HBGBaseBlock
    {
        [Display(Name = "Count", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual double Count { get; set; }

        [Display(Name = "Image", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Image { get; set; }

        [Display(Name = "Subject", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        public virtual string Subject { get; set; }

        [Display(Name = "Link", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        public virtual LinkItem Link { get; set; }

    }
}
