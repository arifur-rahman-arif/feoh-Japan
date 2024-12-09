using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGBlogsContainerBlock", GUID = "43999E30-3FCB-42EE-BEBC-199F5D778CA1", GroupName = "Hospitality")]
    public class HBGBlogsContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Preview", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Preview { get; set; }

        [Display(Name = "PreviewCTAText", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string PreviewCTAText { get; set; }

    }
}
