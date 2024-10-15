using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGVideoBlock", GUID = "6E728F8B-7E94-4D57-9B41-98D0597928AA", GroupName = "Hospitality")]
    public class HBGVideoBlock : HBGBaseBlock
    {
        [Display(Name = "Video Link", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem VideoLink { get; set; }

        [Display(Name = "Video Caption", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string VideoCaption { get; set; }

        [Display(Name = "Video Thumb", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference VideoThumb { get; set; }

    }
}
