using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGGuestAccommodationBlock", GUID = "D43A48A6-E663-4BA4-8118-32E96467D65E", GroupName = "Hospitality")]
    public class HBGGuestAccommodationBlock : HBGBaseBlock
    {
        [Display(Name = "Desktop Preview Images", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string DesktopPreviewImages { get; set; }

        [Display(Name = "Mobile Preview Images", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string MobilePreviewImages { get; set; }

    }
}
