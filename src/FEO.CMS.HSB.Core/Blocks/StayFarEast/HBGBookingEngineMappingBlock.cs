using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGBookingEngineMappingBlock", GUID = "55E9385A-FC43-49D6-9A5E-BB4CFBFE2EA7", GroupName = "Hospitality")]
    public class HBGBookingEngineMappingBlock : HBGBaseBlock
    {
        [Display(Name = "BookingMapping", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual string BookingMapping { get; set; }

    }
}
