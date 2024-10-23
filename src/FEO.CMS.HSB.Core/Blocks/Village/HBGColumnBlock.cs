using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGColumnBlock", GUID = "52A8C03F-7D6C-4C8E-A110-F43AFB91FBEA", GroupName = "Hospitality")]
    public class HBGColumnBlock : HBGBaseBlock
    {
        [Display(Name = "Image", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Image { get; set; }

        [Display(Name = "ImageLink", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual LinkItem ImageLink { get; set; }

    }
}
