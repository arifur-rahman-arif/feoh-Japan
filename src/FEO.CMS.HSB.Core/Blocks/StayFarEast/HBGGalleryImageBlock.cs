using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGGalleryImageBlock", GUID = "B432542C-3535-4853-A87D-BAEBE2FAFF84", GroupName = "Hospitality")]
    public class HBGGalleryImageBlock : HBGBaseBlock
    {
        [Display(Name = "Image", GroupName = "Gallery", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Image { get; set; }

        [Display(Name = "Caption", GroupName = "Gallery", Order = 200)]
        [CultureSpecific]
        public virtual string Caption { get; set; }

        [Display(Name = "Video Source Url", GroupName = "Gallery", Order = 300)]
        [CultureSpecific]
        public virtual LinkItem VideoSourceUrl { get; set; }

    }
}
