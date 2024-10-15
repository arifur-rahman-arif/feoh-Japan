using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGHighlightItemBlock", GUID = "8191BCDF-D7B4-4E3B-8FE3-F39B43F57048", GroupName = "Hospitality")]
    public class HBGHighlightItemBlock : HBGBaseBlock
    {
        [Display(Name = "Large Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LargeImage { get; set; }

        [Display(Name = "Tour URL", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string TourURL { get; set; }

        [Display(Name = "Video ID", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string VideoID { get; set; }

    }
}
