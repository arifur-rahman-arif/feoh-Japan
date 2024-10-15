using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGBannerBlock", GUID = "74C5F2D0-243F-4928-AEF8-67CF435B47CD", GroupName = "Hospitality")]
    public class HBGBannerBlock : HBGBaseBlock
    {
        [Display(Name = "Image Desktop", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ImageDesktop { get; set; }

        [Display(Name = "Image Tablet", GroupName = "Content", Order = 150)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ImageTablet { get; set; }

        [Display(Name = "Image Mobile", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ImageMobile { get; set; }

        [Display(Name = "Title", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Sub Title", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

    }
}
