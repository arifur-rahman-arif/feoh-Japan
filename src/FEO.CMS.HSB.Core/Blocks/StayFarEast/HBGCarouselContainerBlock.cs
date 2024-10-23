using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGCarouselContainerBlock", GUID = "AB802B03-369B-4472-BF43-EAC25AFC10E5", GroupName = "Hospitality")]
    public class HBGCarouselContainerBlock : HBGBaseBlock
    {
        [Display(Name = "CarouselItems", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea CarouselItems { get; set; }

    }
}
