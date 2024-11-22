using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using System.ComponentModel.DataAnnotations;

namespace MyOptimizelyProject.Models.Pages
{
    [ContentType(DisplayName = "ImageDarknessOverlayConfig", GUID = "CC561C67-7A7D-476E-BED1-2D44AC010416", GroupName = "Corporate")]
    public class HBGImageDarknessOverlayConfig : HBGStyleConfigBlock
    {
        [Display(Name = "Enable Darkness Overlay Image", GroupName = "Settings", Order =800)]
        [CultureSpecific]
        public virtual bool EnableDarknessOverlayImage { get; set; }

    }
}
