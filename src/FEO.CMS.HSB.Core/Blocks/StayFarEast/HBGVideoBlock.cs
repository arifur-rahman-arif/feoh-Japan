using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGVideoBlock", GUID = "6E728F8B-7E94-4D57-9B41-98D0597928AA", GroupName = "Hospitality")]
    public class HBGVideoBlock : HBGStickySummaryConfigBlock
    {
        [Display(Name = "Video Link", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual LinkItem VideoLink { get; set; }

        [Display(Name = "Video Caption", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string VideoCaption { get; set; }

        [Display(Name = "Video Thumb", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference VideoThumb { get; set; }

    }
}
