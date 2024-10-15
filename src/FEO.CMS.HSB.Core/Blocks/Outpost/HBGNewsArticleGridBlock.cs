using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGNewsArticleGridBlock", GUID = "72423F64-EAC4-4614-A639-70C0D43920BC", GroupName = "Hospitality")]
    public class HBGNewsArticleGridBlock : HBGBaseBlock
    {
        [Display(Name = "Articles", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Articles { get; set; }

    }
}
