using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGGenericTermAndConditionBlock", GUID = "0AD527B3-8973-4596-94AD-BFDBBF2DB921", GroupName = "Hospitality")]
    public class HBGGenericTermAndConditionBlock : HBGBaseBlock
    {
        [Display(Name = "Term Condition Title", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string TermConditionTitle { get; set; }

        [Display(Name = "Term Condition Description", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString TermConditionDescription { get; set; }

    }
}
