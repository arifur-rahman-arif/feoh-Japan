using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "Sentosa HBGHighLightContainerConfigBlock", GUID = "44DB3B6E-F8C3-4FCC-8033-9BE7ACDA1AFB", GroupName = "Hospitality")]
    public class SentosaHBGHighLightContainerConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Sub Title Font Size", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference SubTitleFontSize { get; set; }

        [Display(Name = "Sub Title", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

    }
}
