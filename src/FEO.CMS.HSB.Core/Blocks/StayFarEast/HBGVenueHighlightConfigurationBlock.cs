using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGVenueHighlightConfigurationBlock", GUID = "556C044E-DBF4-4505-9CA4-8F4CB46FBCDD", GroupName = "Hospitality")]
    public class HBGVenueHighlightConfigurationBlock : HBGBaseBlock
    {
        [Display(Name = "Location Icon", GroupName = "Icons", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LocationIcon { get; set; }

        [Display(Name = "Contact Icon", GroupName = "Icons", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ContactIcon { get; set; }

        [Display(Name = "Website Icon", GroupName = "Icons", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference WebsiteIcon { get; set; }

        [Display(Name = "Open Hour Icon", GroupName = "Icons", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference OpenHourIcon { get; set; }

    }
}
