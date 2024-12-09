using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGCarrouselConfigBlock", GUID = "98A6A6BE-C733-4104-95BF-5302BFE45DA6", GroupName = "Hospitality")]
    public class HBGCarrouselConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Text Alignment Style Names", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference TextAlignmentStyleNames { get; set; }

        [Display(Name = "Show Promo", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual bool ShowPromo { get; set; }

        [Display(Name = "Carousel Id", GroupName = "Settings", Order = 300)]
        [CultureSpecific]
        public virtual ContentReference CarouselId { get; set; }

    }
}
