using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGBookingWidgetBlock", GUID = "1E6196D8-3AC3-4F68-96EF-43D440ACB619", GroupName = "Hospitality")]
    public class HBGBookingWidgetBlock : HBGBaseBlock
    {
        [Display(Name = "Is Hide From Booking Widget", GroupName = "Navigation", Order = 100)]
        [CultureSpecific]
        public virtual bool IsHideFromBookingWidget { get; set; }

    }
}
