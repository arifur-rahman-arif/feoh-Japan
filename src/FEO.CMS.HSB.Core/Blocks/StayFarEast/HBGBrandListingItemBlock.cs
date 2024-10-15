using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGBrandListingItemBlock", GUID = "2134A1D6-5F4F-4BE4-8B2B-C7BAA6DD6008", GroupName = "Hospitality")]
    public class HBGBrandListingItemBlock : HBGBaseBlock
    {
        [Display(Name = "Brand Description", GroupName = "Brand Listing", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString BrandDescription { get; set; }

    }
}
