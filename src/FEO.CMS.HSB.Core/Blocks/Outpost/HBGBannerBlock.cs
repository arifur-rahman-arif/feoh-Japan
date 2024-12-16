using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "Outpost HBGBannerBlock", GUID = "5A2F8299-9203-467A-AB77-A940B6FFE418", GroupName = "Hospitality")]
    public class OutpostHBGBannerBlock : HBGBaseBlock
    {
        [Display(Name = "Link To Contact", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual LinkItem LinkToContact { get; set; }

    }
}
