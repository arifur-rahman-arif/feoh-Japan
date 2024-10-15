using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGPositionConfigBlock", GUID = "B5CB3D57-AEC7-476C-B759-9A1035842D7F", GroupName = "Hospitality")]
    public class HBGPositionConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Image Position", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString ImagePosition { get; set; }

        [Display(Name = "Parallax Overlay", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual bool ParallaxOverlay { get; set; }

    }
}
