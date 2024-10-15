using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGThemesContainerBlock", GUID = "DCC1A2DE-0F3F-48F4-98DA-B52EE3F12440", GroupName = "Hospitality")]
    public class HBGThemesContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Themes", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Themes { get; set; }

    }
}
