using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGBookingEngineMappingBlock", GUID = "55E9385A-FC43-49D6-9A5E-BB4CFBFE2EA7", GroupName = "Hospitality")]
    public class HBGBookingEngineMappingBlock : HBGDayInAdvanceBlock
    {
        [Display(Name = "BookingMapping", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual string BookingMapping { get; set; }

    }
}
