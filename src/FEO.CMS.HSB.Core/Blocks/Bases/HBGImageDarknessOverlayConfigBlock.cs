using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGImageDarknessOverlayConfigBlock", GUID = "CC561C67-7A7D-476E-BED1-2D44AC010416", GroupName = "Hospitality")]
    public class HBGImageDarknessOverlayConfigBlock : StayFarEastHBGStyleConfigBlock
    {
        [Display(Name = "Enable Darkness Overlay Image", GroupName = SystemTabNames.Settings, Order = 800)]
        [CultureSpecific]
        public virtual bool EnableDarknessOverlayImage { get; set; }

    }
}
