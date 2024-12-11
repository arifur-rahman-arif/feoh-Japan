using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGBrandGroupsPage", GUID = "E0452315-5770-4B7C-90E4-4D310DF1D973", GroupName = "Hospitality")]
    public class HBGBrandGroupsPage : HBGBasePage
    {
        [Display(Name = "Heading", GroupName = "Brand Settings", Order = 100)]
        [CultureSpecific]
        public virtual string Heading { get; set; }

        [Display(Name = "Logo Image", GroupName = "Brand Settings", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LogoImage { get; set; }

        [Display(Name = "Logo Url", GroupName = "Brand Settings", Order = 300)]
        [CultureSpecific]
        public virtual LinkItem LogoUrl { get; set; }

        [Display(Name = "Brands", GroupName = "Logos and CTAs", Order = 800)]
        [CultureSpecific]
        [AllowedTypes(AllowedTypes = new[] { typeof(HBGHotelBrandPage) })]
        public virtual ContentArea Brands { get; set; }

    }
}
