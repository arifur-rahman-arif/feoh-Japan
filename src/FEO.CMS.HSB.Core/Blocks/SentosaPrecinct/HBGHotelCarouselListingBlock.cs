using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGHotelCarouselListingBlock", GUID = "B2F677B6-6B2D-48FF-AAD6-52C1A4DB0027", GroupName = "Hospitality")]
    public class HBGHotelCarouselListingBlock : HBGBaseBlock
    {
        [Display(Name = "Hotels List", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea HotelsList { get; set; }

    }
}
