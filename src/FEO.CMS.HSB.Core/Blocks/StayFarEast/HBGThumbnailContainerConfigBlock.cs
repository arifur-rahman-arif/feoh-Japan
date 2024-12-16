using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGThumbnailContainerConfigBlock", GUID = "ABFCE100-7B95-4D88-A900-D874DEE06930", GroupName = "Hospitality")]
    public class HBGThumbnailContainerConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Theme", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Theme { get; set; }

        [Display(Name = "thumbnails", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual ContentArea thumbnails { get; set; }


    }
}
