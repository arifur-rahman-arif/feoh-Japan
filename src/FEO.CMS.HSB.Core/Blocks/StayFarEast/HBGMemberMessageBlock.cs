using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGMemberMessageBlock", GUID = "1E5A7808-3365-4963-BCF9-0F08A38AA548", GroupName = "Hospitality")]
    public class HBGMemberMessageBlock : HBGBaseBlock
    {
        [Display(Name = "Member Message Description", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString MemberMessageDescription { get; set; }

    }
}
