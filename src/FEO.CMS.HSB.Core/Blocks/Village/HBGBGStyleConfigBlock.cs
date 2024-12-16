using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGBGStyleConfigBlock", GUID = "F94FFA1D-33A4-4560-B4B5-3745D1BAD9F4", GroupName = "Hospitality")]
    public class HBGBGStyleConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Background Color Style Names", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference BackgroundColorStyleNames { get; set; }

        [Display(Name = "Background Image", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BackgroundImage { get; set; }

    }
}
