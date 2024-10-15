using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGUserReviewBlock", GUID = "2C61D811-8A7B-4B5B-BDB9-744366936F93", GroupName = "Hospitality")]
    public class HBGUserReviewBlock : HBGBaseBlock
    {
        [Display(Name = "User Name", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string UserName { get; set; }

        [Display(Name = "User Descriptions", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString UserDescriptions { get; set; }

        [Display(Name = "User Banner", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference UserBanner { get; set; }

    }
}
