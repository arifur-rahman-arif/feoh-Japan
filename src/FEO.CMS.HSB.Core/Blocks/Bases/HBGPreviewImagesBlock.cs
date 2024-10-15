using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGPreviewImagesBlock", GUID = "6B6BBF55-B567-4C37-9562-DED5E6701153", GroupName = "Hospitality")]
    public class HBGPreviewImagesBlock : HBGBaseBlock
    {
        [Display(Name = "Large Images", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        public virtual string LargeImages { get; set; }

        [Display(Name = "Medium Images", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        public virtual string MediumImages { get; set; }

        [Display(Name = "Small Images", GroupName = "Images", Order = 300)]
        [CultureSpecific]
        public virtual string SmallImages { get; set; }

    }
}
