using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGEventTypeBlock", GUID = "B7B95ACE-B0CA-4FD5-A90A-8FCE820C4928", GroupName = "Hospitality")]
    public class HBGEventTypeBlock : HBGBaseBlock
    {
        [Display(Name = "Events", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Events { get; set; }

    }
}
