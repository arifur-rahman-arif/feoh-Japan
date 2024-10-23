using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStickyWidgetBlock", GUID = "C9A001D6-D66A-4C70-A27C-F32D56677658", GroupName = "Hospitality")]
    public class HBGStickyWidgetBlock : HBGBaseBlock
    {
        [Display(Name = "Pull out text", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string Pullouttext { get; set; }

        [Display(Name = "Pull out text description", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Pullouttextdescription { get; set; }

        [Display(Name = "Link to Subscription page", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual LinkItem LinktoSubscriptionpage { get; set; }

    }
}
