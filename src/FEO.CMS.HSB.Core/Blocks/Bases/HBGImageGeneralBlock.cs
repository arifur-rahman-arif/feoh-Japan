using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGImageGeneralBlock", GUID = "516CA285-0105-4143-8982-95A207AD23B5", GroupName = "Hospitality")]
    public class HBGImageGeneralBlock : HBGRootBlock
    {
        [Display(Name = "Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Image { get; set; }

    }
}
