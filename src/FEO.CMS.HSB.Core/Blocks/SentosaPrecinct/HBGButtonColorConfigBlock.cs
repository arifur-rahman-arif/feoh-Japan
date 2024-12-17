using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGButtonColorConfigBlock", GUID = "81973BF4-7068-43B2-BD8A-247ED1615471", GroupName = "Hospitality")]
    public class HBGButtonColorConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Action Button Color", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference ActionButtonColor { get; set; }

        [Display(Name = "Show Short Summary", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual bool ShowShortSummary { get; set; }

        [Display(Name = "Divider Color", GroupName = SystemTabNames.Settings, Order = 300)]
        [CultureSpecific]
        public virtual ContentReference DividerColor { get; set; }

    }
}
