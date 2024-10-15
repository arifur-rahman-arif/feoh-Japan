using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGStaticContentBlock", GUID = "79962750-10B2-4995-941F-25606A8DCE4D", GroupName = "Hospitality")]
    public class HBGStaticContentBlock : HBGBaseBlock
    {
        [Display(Name = "Summary", GroupName = "Content", Order = 0)]
        [CultureSpecific]
        public virtual string Summary { get; set; }

        [Display(Name = "Description", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Description { get; set; }

    }
}
