using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGMapItemBlock", GUID = "672B5EB6-6BF3-4AF2-89FA-794FB7A4E64E", GroupName = "Hospitality")]
    public class HBGMapItemBlock : HBGBaseBlock
    {
        [Display(Name = "Tablet Image", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference TabletImage { get; set; }

        [Display(Name = "Sub Title", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString SubTitle { get; set; }

    }
}
