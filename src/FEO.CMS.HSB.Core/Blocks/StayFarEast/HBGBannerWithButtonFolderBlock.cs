using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGBannerWithButtonFolderBlock", GUID = "B6137E60-D69E-44FA-9D18-C44760A9C204", GroupName = "Hospitality")]
    public class HBGBannerWithButtonFolderBlock : HBGBaseBlock
    {
        [Display(Name = "Show Downward Arrow", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual bool ShowDownwardArrow { get; set; }

        [Display(Name = "Enable Darkness Overlay Image", GroupName = SystemTabNames.Settings, Order = 800)]
        [CultureSpecific]
        public virtual bool EnableDarknessOverlayImage { get; set; }

        [Display(Name = "ChildrenFolderReference", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference ChildrenFolderReference { get; set; }
    }
}
