using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGResponseHeadersBlock", GUID = "927BB5A2-1D87-47EA-A95A-316F51DAC73C", GroupName = "Hospitality")]
    public class HBGResponseHeadersBlock : HBGBaseBlock
    {
        [Display(Name = "Cache Control", GroupName = "Response Header Settings", Order = 300)]
        [CultureSpecific]
        public virtual string CacheControl { get; set; }

    }
}
