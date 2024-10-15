using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGNavigationLogoBlock", GUID = "17728910-48F2-4171-806D-2E0832BC9874", GroupName = "Hospitality")]
    public class HBGNavigationLogoBlock : HBGBaseBlock
    {
        [Display(Name = "Nav Logo Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference NavLogoImage { get; set; }

        [Display(Name = "Nav Logo Image For Mobile", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference NavLogoImageForMobile { get; set; }

    }
}
