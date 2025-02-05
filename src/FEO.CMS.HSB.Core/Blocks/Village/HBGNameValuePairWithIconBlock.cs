using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGNameValuePairWithIconBlock", GUID = "46017AF0-92AC-426C-9FB3-EB6503A47E43", GroupName = "Hospitality")]
    public class HBGNameValuePairWithIconBlock : HBGNameValuePairBlock
    {
        [Display(Name = "Icon", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Icon { get; set; }

        [Display(Name = "LongValue", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString LongValue { get; set; }

    }
}
