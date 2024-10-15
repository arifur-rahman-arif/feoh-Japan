using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGLogoHighlightBlock", GUID = "8594DDD7-4BEE-4AC0-BF45-11B4FF3AB60C", GroupName = "Hospitality")]
    public class HBGLogoHighlightBlock : HBGBaseBlock
    {
        [Display(Name = "Logo Highlight", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LogoHighlight { get; set; }

    }
}
