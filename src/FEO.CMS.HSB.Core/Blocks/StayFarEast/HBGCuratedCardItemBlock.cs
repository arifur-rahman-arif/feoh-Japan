using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGCuratedCardItemBlock", GUID = "B899FDD9-C7D6-46B5-AE04-E03ACBE19CB8", GroupName = "Hospitality")]
    public class HBGCuratedCardItemBlock : HBGLinkBlock
    {
        [Display(Name = "Image Card", GroupName = "Image", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ImageCard { get; set; }

    }
}
