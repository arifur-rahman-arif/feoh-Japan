using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGImageCarouselItemBlock", GUID = "79D3C1B1-FBAD-45F8-83C1-D4301E27A024", GroupName = "Hospitality")]
    public class HBGImageCarouselItemBlock : HBGBaseBlock
    {
        [Display(Name = "Image", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Image { get; set; }

        [Display(Name = "Image Caption", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string ImageCaption { get; set; }

    }
}
