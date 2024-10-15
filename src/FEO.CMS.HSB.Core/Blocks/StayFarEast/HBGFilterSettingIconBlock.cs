using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGFilterSettingIconBlock", GUID = "8AE9E978-9D0E-45CC-B3AC-C429D0D0684C", GroupName = "Hospitality")]
    public class HBGFilterSettingIconBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Icon", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Icon { get; set; }

    }
}
