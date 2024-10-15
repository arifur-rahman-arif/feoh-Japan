using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGEatsPlayContainerBlock", GUID = "EF504EBC-5F9B-4B7A-99F7-51153097BE71", GroupName = "Hospitality")]
    public class HBGEatsPlayContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Illustration Image", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference IllustrationImage { get; set; }

    }
}
