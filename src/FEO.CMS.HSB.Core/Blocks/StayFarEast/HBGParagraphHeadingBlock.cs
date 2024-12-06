using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGParagraphHeadingBlock", GUID = "AE9AA0EA-62C7-41D9-A04E-3F9AC560C6DF", GroupName = "Hospitality")]
    public class HBGParagraphHeadingBlock : HBGStickySummaryConfigBlock
    {
        [Display(Name = "Heading", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string Heading { get; set; }

    }
}
