using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGContentBlockBlock", GUID = "1A7013A6-BA22-4679-A1DF-5574A0A89679", GroupName = "Hospitality")]
    public class HBGContentBlockBlock : HBGBaseBlock
    {
        [Display(Name = "Content", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Content { get; set; }

    }
}
