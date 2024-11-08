using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGDayInAdvanceBlock", GUID = "DAC62173-E2E3-4118-8A06-0FD26791587D", GroupName = "Hospitality")]
    public class HBGDayInAdvanceBlock : HBGBaseBlock
    {
        [Display(Name = "Number of Days in Advance", GroupName = "Booking Config", Order = 600)]
        [CultureSpecific]
        public virtual double NumberofDaysinAdvance { get; set; }

    }
}
