using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGListHeadingConfigBlock", GUID = "DB011657-86B2-451B-A70C-5B88199F0C7F", GroupName = "Hospitality")]
    public class HBGListHeadingConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Subtitle", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual string Subtitle { get; set; }

    }
}
