using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGBrandCarouselItemBlock", GUID = "5CF5BFFA-88DD-4772-A1B3-A8C1B59988B4", GroupName = "Hospitality")]
    public class HBGBrandCarouselItemBlock : HBGBaseBlock
    {
        [Display(Name = "Brand Thumbnail", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BrandThumbnail { get; set; }

    }
}
