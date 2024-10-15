using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGInstagramBlock", GUID = "65639A12-67A8-4B95-A9C4-62C021F802F7", GroupName = "Hospitality")]
    public class HBGInstagramBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Sub Title", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

        [Display(Name = "Juicer Data", GroupName = "Content", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString JuicerData { get; set; }

    }
}
