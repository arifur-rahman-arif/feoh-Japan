using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGHotelBrandPage", GUID = "0DF2AC53-3060-4788-BEAC-AE969819352A", GroupName = "Hospitality")]
    public class HBGHotelBrandPage : HBGBasePage
    {
        [Display(Name = "Footer URL", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual LinkItem FooterURL { get; set; }

        [Display(Name = "Logo Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LogoImage { get; set; }

        [Display(Name = "Main Content", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString MainContent { get; set; }

        [Display(Name = "Brand Logo Coloured", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BrandLogoColoured { get; set; }

        [Display(Name = "Brand Logo White", GroupName = "Images", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BrandLogoWhite { get; set; }

    }
}
