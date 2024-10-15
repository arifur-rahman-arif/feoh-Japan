using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGAboutUsBlock", GUID = "0EAA6829-8BAB-4FF3-86A6-3162032B45E3", GroupName = "Hospitality")]
    public class HBGAboutUsBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Banner", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Banner { get; set; }

        [Display(Name = "Summary", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Summary { get; set; }

        [Display(Name = "Content Image", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ContentImage { get; set; }

        [Display(Name = "Content Text", GroupName = "Content", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString ContentText { get; set; }

    }
}
