using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGHotelAmenityCategoryBlock", GUID = "710E5006-8A95-406D-B352-0E7A0D2C5FD5", GroupName = "Hospitality")]
    public class HBGHotelAmenityCategoryBlock : HBGBaseBlock
    {
        [Display(Name = "Icon", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Icon { get; set; }

        [Display(Name = "Category Name", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string CategoryName { get; set; }

    }
}
