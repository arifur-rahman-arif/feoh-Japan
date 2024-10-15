using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGMemberRelatedTextBlock", GUID = "8605096F-338D-4B2A-96E5-2F6B8A610E1F", GroupName = "Hospitality")]
    public class HBGMemberRelatedTextBlock : HBGBaseBlock
    {
        [Display(Name = "Show Member Message", GroupName = "Member Related Text", Order = 100)]
        [CultureSpecific]
        public virtual bool ShowMemberMessage { get; set; }

        [Display(Name = "Member Message", GroupName = "Member Related Text", Order = 200)]
        [CultureSpecific]
        public virtual ContentReference MemberMessage { get; set; }

    }
}
