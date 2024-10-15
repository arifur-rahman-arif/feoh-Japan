using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGSubNavigationAlignmentConfigBlock", GUID = "053A1CA1-1D76-4A66-9C1C-FB5ECC3A3B2A", GroupName = "Hospitality")]
    public class HBGSubNavigationAlignmentConfigBlock : HBGBaseBlock
    {
        [Display(Name = "SubNavigation Alignment", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference SubNavigationAlignment { get; set; }

    }
}
