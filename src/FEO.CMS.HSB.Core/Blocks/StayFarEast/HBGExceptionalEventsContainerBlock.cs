using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGExceptionalEventsContainerBlock", GUID = "A5A29E55-22A5-4EF1-9011-0FAE905F9AAA", GroupName = "Hospitality")]
    public class HBGExceptionalEventsContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Exceptional Events", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea ExceptionalEvents { get; set; }

    }
}
