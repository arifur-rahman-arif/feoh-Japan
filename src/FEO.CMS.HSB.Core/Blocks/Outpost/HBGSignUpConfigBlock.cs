using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGSignUpConfigBlock", GUID = "1C674954-B9E8-4134-ADF2-C8C5B4CEFBA7", GroupName = "Hospitality")]
    public class HBGSignUpConfigBlock : HBGBaseBlock
    {
        [Display(Name = "CTA Background Color Style Name", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference CTABackgroundColorStyleName { get; set; }

    }
}
