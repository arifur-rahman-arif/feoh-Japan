using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGPressandMediaPageSizeConfigBlock", GUID = "559B6E45-75D4-452E-BA3F-6CDA439EFBCB", GroupName = "Hospitality")]
    public class HBGPressandMediaPageSizeConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Page Size For Press Release", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual int PageSizeForPressRelease { get; set; }

        [Display(Name = "Page Size For Media Mentions", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual int PageSizeForMediaMentions { get; set; }

    }
}
