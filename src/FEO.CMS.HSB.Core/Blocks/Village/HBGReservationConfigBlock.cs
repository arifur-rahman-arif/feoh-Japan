using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGReservationConfigBlock", GUID = "48C3FA36-11F1-44B4-AAFA-7AA3FEFD384F", GroupName = "Hospitality")]
    public class HBGReservationConfigBlock : HBGBaseBlock
    {
        [Display(Name = "ShowReservation", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool ShowReservation { get; set; }

    }
}
