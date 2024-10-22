using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGImageTextGridBlock", GUID = "0D293883-4FCC-427F-8C28-67CDF08E75BE", GroupName = "Hospitality")]
    public class HBGImageTextGridBlock : HBGBaseBlock
    {
        [Display(Name = "Content", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Content { get; set; }

        [Display(Name = "Image", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Image { get; set; }

        [Display(Name = "Image Caption", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual string ImageCaption { get; set; }

    }
}
