using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGBestRateBlock", GUID = "88548035-02F9-4F1F-A208-C2685214ACF6", GroupName = "Hospitality")]
    public class HBGBestRateBlock : HBGStyleConfigBlock
    {
        [Display(Name = "Highlight Text", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString HighlightText { get; set; }

        [Display(Name = "Logo Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LogoImage { get; set; }

        [Display(Name = "Learn more", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        public virtual LinkItem Learnmore { get; set; }



    }
}
