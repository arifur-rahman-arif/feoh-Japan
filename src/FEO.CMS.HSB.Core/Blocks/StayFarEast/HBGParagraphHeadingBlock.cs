using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGParagraphHeadingBlock", GUID = "AE9AA0EA-62C7-41D9-A04E-3F9AC560C6DF", GroupName = "Hospitality")]
    public class HBGParagraphHeadingBlock : HBGBaseBlock
    {
        [Display(Name = "Heading", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string Heading { get; set; }

    }
}
