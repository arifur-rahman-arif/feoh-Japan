using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGImageWithCaptionBlock", GUID = "10D52D85-B0C7-49BF-8B96-5C095F60CCAA", GroupName = "Hospitality")]
    public class HBGImageWithCaptionBlock : HBGBaseBlock
    {
        [Display(Name = "Image", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Image { get; set; }

        [Display(Name = "Caption", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual string Caption { get; set; }

    }
}
