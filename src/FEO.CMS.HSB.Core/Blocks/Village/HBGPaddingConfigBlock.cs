using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGPaddingConfigBlock", GUID = "C3362D6F-CE13-43E2-A124-2E37D2237FBD", GroupName = "Hospitality")]
    public class HBGPaddingConfigBlock : HBGBaseBlock
    {
        [Display(Name = "No Bottom Padding", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool NoBottomPadding { get; set; }

    }
}
