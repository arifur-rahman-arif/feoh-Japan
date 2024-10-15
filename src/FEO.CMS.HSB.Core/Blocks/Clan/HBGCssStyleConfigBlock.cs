using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Clan
{
    [ContentType(DisplayName = "HBGCssStyleConfigBlock", GUID = "97FAF6B0-A8FE-40E8-96B9-B282A2EB0173", GroupName = "Hospitality")]
    public class HBGCssStyleConfigBlock : HBGBaseBlock
    {
        [Display(Name = "BackGroundColor", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference BackGroundColor { get; set; }

    }
}
