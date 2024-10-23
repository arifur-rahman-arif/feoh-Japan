using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGImageButtonBlock", GUID = "68A54B2F-DE99-48B8-958F-9B4917907710", GroupName = "Hospitality")]
    public class HBGImageButtonBlock : HBGRootBlock
    {
        [Display(Name = "Button Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ButtonImage { get; set; }

        [Display(Name = "Short Title", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        public virtual string ShortTitle { get; set; }

    }
}
