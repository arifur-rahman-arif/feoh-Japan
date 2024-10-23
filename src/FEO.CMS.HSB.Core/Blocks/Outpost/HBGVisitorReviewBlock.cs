using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGVisitorReviewBlock", GUID = "78E7A38F-4D9D-496D-B482-AFA7751C2C6D", GroupName = "Hospitality")]
    public class HBGVisitorReviewBlock : HBGBaseBlock
    {
        [Display(Name = "Background Image", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BackgroundImage { get; set; }

        [Display(Name = "Tablet Background Image", GroupName = SystemTabNames.Content, Order = 125)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference TabletBackgroundImage { get; set; }

        [Display(Name = "Mobile Background Image", GroupName = SystemTabNames.Content, Order = 150)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference MobileBackgroundImage { get; set; }

        [Display(Name = "Rating Logo", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference RatingLogo { get; set; }

    }
}
