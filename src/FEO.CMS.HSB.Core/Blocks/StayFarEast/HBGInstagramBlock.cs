using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGInstagramBlock", GUID = "65639A12-67A8-4B95-A9C4-62C021F802F7", GroupName = "Hospitality")]
    public class HBGInstagramBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Sub Title", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

        [Display(Name = "Juicer Data", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString JuicerData { get; set; }

        [Display(Name = "Style Names", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual ContentReference StyleNames { get; set; }

    }
}
