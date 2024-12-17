using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGInsidersCarouselFolderBlock", GUID = "6A53E37C-2A17-4596-80B0-EB2F0C911543", GroupName = "Hospitality")]
    public class HBGInsidersCarouselFolderBlock : HBGHeaderContainerConfigBlock
    {
        [Display(Name = "Carousel Items", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference CarouselFolder { get; set; }
    }
}
