using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGBannerImagesBlock", GUID = "C5C2FC47-8815-4BEE-B248-68F74FD48B62", GroupName = "Hospitality")]
    public class HBGBannerImagesBlock : HBGCTAOneSettingBlock
    {
        [Display(Name = "Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Image { get; set; }

        [Display(Name = "ImageForMobile", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ImageForMobile { get; set; }

        [Display(Name = "ImageForTablet", GroupName = "Images", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ImageForTablet { get; set; }

    }
}
