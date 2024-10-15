using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGNavigationItemBlock", GUID = "5004D23C-028F-4A6D-917C-9B3F8A1B3FC1", GroupName = "Hospitality")]
    public class HBGNavigationItemBlock : HBGBaseBlock
    {
        [Display(Name = "Link Title", GroupName = "SEO", Order = 100)]
        [CultureSpecific]
        public virtual string LinkTitle { get; set; }

        [Display(Name = "Menu Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference MenuImage { get; set; }

    }
}
