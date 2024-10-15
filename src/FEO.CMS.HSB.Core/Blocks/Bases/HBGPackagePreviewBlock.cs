using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGPackagePreviewBlock", GUID = "CE40031D-D406-4220-9F04-4D26A84B5C41", GroupName = "Hospitality")]
    public class HBGPackagePreviewBlock : HBGBaseBlock
    {
        [Display(Name = "Display Get In Touch", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference DisplayGetInTouch { get; set; }

        [Display(Name = "Package Overview", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString PackageOverview { get; set; }

        [Display(Name = "Package Includes", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString PackageIncludes { get; set; }

    }
}
