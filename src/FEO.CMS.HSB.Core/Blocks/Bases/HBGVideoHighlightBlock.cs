using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGVideoHighlightBlock", GUID = "15AC9232-C4C4-419D-A488-54F12E86E3ED", GroupName = "Hospitality")]
    public class HBGVideoHighlightBlock : HBGBaseBlock
    {
        [Display(Name = "Override Banner Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        public virtual bool OverrideBannerImage { get; set; }

        [Display(Name = "Use As Default", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        public virtual bool UseAsDefault { get; set; }

    }
}
