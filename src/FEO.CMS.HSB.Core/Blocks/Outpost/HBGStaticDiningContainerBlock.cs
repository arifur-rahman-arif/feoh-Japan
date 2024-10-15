using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGStaticDiningContainerBlock", GUID = "4945C7FD-435A-4E80-B5F9-2CAA63597ADC", GroupName = "Hospitality")]
    public class HBGStaticDiningContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Dinings", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Dinings { get; set; }

    }
}
