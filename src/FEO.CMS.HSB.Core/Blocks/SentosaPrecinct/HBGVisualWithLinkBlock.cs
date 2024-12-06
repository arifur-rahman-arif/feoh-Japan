using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGVisualWithLinkBlock", GUID = "7A1598CE-F009-469D-9570-AB6F1B6738EA", GroupName = "Hospitality")]
    public class HBGVisualWithLinkBlock : HBGBaseBlock
    {
        [Display(Name = "Small Images", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string SmallImages { get; set; }

        [Display(Name = "Large Images", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string LargeImages { get; set; }

    }
}
