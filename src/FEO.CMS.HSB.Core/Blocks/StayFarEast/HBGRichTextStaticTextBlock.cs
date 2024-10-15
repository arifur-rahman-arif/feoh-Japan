using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGRichTextStaticTextBlock", GUID = "418AC245-B9E0-4707-9D78-61C38D0C8ADC", GroupName = "Hospitality")]
    public class HBGRichTextStaticTextBlock : HBGBaseBlock
    {
        [Display(Name = "Name", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string Name { get; set; }

        [Display(Name = "Value", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Value { get; set; }

    }
}
