using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGPrivacyPageConfigBlock", GUID = "F8B54B3A-04EB-41B6-9D5A-4A9691483053", GroupName = "Hospitality")]
    public class HBGPrivacyPageConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Show Border Line", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool ShowBorderLine { get; set; }

    }
}
