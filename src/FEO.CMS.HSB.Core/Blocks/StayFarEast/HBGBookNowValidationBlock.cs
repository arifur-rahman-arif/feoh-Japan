using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGBookNowValidationBlock", GUID = "56CE6620-8FC6-44A9-B508-9C98E06EE979", GroupName = "Hospitality")]
    public class HBGBookNowValidationBlock : HBGBaseBlock
    {
        [Display(Name = "Please Select", GroupName = "Booking Widget Field Validation", Order = 100)]
        [CultureSpecific]
        public virtual string PleaseSelect { get; set; }

        [Display(Name = "Property", GroupName = "Booking Widget Field Validation", Order = 200)]
        [CultureSpecific]
        public virtual string Property { get; set; }

        [Display(Name = "Check In Date", GroupName = "Booking Widget Field Validation", Order = 300)]
        [CultureSpecific]
        public virtual string CheckInDate { get; set; }

        [Display(Name = "Check Out Date", GroupName = "Booking Widget Field Validation", Order = 400)]
        [CultureSpecific]
        public virtual string CheckOutDate { get; set; }

    }
}
