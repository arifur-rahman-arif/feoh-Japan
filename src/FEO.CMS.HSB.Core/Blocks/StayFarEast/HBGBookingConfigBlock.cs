using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGBookingConfigBlock", GUID = "CB7D58CB-2DD2-44F5-B8A7-3D2AD8A49001", GroupName = "Hospitality")]
    public class HBGBookingConfigBlock : HBGBookingBlock
    {
        [Display(Name = "Hotel Code Field Name", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual string HotelCodeFieldName { get; set; }

    }
}
