using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGTestItemBlock", GUID = "DACFADC8-86BA-46E9-85C1-DB3D77687CE9", GroupName = "Hospitality")]
    public class HBGTestItemBlock : HBGBaseBlock
    {
        [Display(Name = "Thumbnail", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Thumbnail { get; set; }

    }
}
