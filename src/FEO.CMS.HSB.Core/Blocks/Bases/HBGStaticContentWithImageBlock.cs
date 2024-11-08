using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGStaticContentWithImageBlock", GUID = "F7004A6C-EBDF-478D-8BA5-B58EF3DC2A71", GroupName = "Hospitality")]
    public class HBGStaticContentWithImageBlock : HBGBaseBlock
    {
        [Display(Name = "Image", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Image { get; set; }

    }
}
