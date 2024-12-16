using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGShowViewGalleryButtonBlock", GUID = "94E3E235-7A1D-449C-99B3-B5614B2BDA2A", GroupName = "Hospitality")]
    public class HBGShowViewGalleryButtonBlock : HBGBaseBlock
    {
        [Display(Name = "Show View Gallery", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool ShowViewGallery { get; set; }

    }
}
