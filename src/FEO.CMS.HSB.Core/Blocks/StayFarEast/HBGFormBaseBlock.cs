using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGFormBaseBlock", GUID = "481AB1CE-E817-49FB-BD39-3F48881F1F16", GroupName = "Hospitality")]
    public class HBGFormBaseBlock : HBGBaseBlock
    {
        [Display(Name = "Fields", GroupName = "Data", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Fields { get; set; }

        [Display(Name = "Privacy Policy", GroupName = "Data", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString PrivacyPolicy { get; set; }

    }
}
