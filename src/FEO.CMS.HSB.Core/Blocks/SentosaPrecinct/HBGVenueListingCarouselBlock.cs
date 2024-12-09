using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGVenueListingCarouselBlock", GUID = "A5C6B0BF-736E-4F31-ABC7-0348933FB2C4", GroupName = "Hospitality")]
    public class HBGVenueListingCarouselBlock : HBGBaseBlock
    {
        [Display(Name = "Venues", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Venues { get; set; }

        [Display(Name = "Venue Link Text", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string VenueLinkText { get; set; }

    }
}
