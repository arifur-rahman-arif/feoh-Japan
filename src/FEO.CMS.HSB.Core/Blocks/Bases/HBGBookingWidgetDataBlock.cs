using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGBookingWidgetDataBlock", GUID = "336E76BE-9E47-443F-91A0-6A3161732537", GroupName = "Hospitality")]
    public class HBGBookingWidgetDataBlock : HBGBaseBlock
    {
        [Display(Name = "BookNow Text", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string BookNowText { get; set; }

        [Display(Name = "BookNow Mobile Text", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string BookNowMobileText { get; set; }

        [Display(Name = "Check Availability Text", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual string CheckAvailabilityText { get; set; }

        [Display(Name = "Disable Booking widget", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual bool DisableBookingwidget { get; set; }

        [Display(Name = "BookNow CTA Link", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        public virtual LinkItem BookNowCTALink { get; set; }

    }
}
