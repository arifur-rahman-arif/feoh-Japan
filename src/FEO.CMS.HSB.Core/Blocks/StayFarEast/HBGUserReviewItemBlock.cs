using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGUserReviewItemBlock", GUID = "FCF0FCF2-C320-4C87-B05B-1FB747E87160", GroupName = "Hospitality")]
    public class HBGUserReviewItemBlock : HBGBaseBlock
    {
        [Display(Name = "User Name", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string UserName { get; set; }

        [Display(Name = "User Descriptions", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString UserDescriptions { get; set; }

        [Display(Name = "User Banner", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference UserBanner { get; set; }

    }
}
