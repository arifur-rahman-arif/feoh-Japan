using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGGallerywithLinkBlock", GUID = "2709A068-E188-4593-B97E-E7D483748B74", GroupName = "Hospitality")]
    public class HBGGallerywithLinkBlock : HBGBaseBlock
    {
        [Display(Name = "Small Images", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string SmallImages { get; set; }

        [Display(Name = "Large Images", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string LargeImages { get; set; }

        [Display(Name = "Medium Image", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        public virtual string MediumImage { get; set; }

        [Display(Name = "Preview Images", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        public virtual string PreviewImages { get; set; }

    }
}
