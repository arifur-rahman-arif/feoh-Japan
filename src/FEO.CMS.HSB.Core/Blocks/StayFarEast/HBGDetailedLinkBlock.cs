using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGDetailedLinkBlock", GUID = "A87609C6-1636-4A24-833A-54A926231599", GroupName = "Hospitality")]
    public class HBGDetailedLinkBlock : HBGBaseBlock
    {
        [Display(Name = "Main Link", GroupName = "Buttons", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem MainLink { get; set; }

        [Display(Name = "Note", GroupName = "Booking Config", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Note { get; set; }

    }
}
