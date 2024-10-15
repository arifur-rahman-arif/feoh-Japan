using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGHotelBrandBlock", GUID = "E423732B-7ED8-409B-A21A-600F70A750FF", GroupName = "Hospitality")]
    public class HBGHotelBrandBlock : HBGBaseBlock
    {
        [Display(Name = "Brand Logo White", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BrandLogoWhite { get; set; }

    }
}
