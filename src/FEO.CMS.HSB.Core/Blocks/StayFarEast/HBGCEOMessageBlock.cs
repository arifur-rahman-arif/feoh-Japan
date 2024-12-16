using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGCEOMessageBlock", GUID = "9F486919-CE9B-4C75-9A84-89CC21A5A03A", GroupName = "Hospitality")]
    public class HBGCEOMessageBlock : HBGBaseBlock
    {
        [Display(Name = "Image", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Image { get; set; }

    }
}
