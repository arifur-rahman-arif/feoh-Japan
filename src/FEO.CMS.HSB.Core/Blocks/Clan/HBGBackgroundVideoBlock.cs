using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Clan
{
    [ContentType(DisplayName = "HBGBackgroundVideoBlock", GUID = "B7547893-DD66-4EDC-9183-DB6DD9D0DF1E", GroupName = "Hospitality")]
    public class HBGBackgroundVideoBlock : HBGBaseBlock
    {
        [Display(Name = "BackgroundVideo", GroupName = "BackgroundVideoSection", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem BackgroundVideo { get; set; }

    }
}
