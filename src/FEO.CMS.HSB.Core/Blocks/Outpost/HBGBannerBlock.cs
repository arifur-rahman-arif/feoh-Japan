using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGBannerBlock", GUID = "5A2F8299-9203-467A-AB77-A940B6FFE418", GroupName = "Hospitality")]
    public class HBGBannerBlock : HBGBaseBlock
    {
        [Display(Name = "Link To Contact", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem LinkToContact { get; set; }

    }
}
