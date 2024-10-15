using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGTalkToUsConfigBlock", GUID = "58077C8B-B491-45FD-87D8-22D698E8004B", GroupName = "Hospitality")]
    public class HBGTalkToUsConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Hide Talk To Us Field From Overview", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual bool HideTalkToUsFieldFromOverview { get; set; }

    }
}
