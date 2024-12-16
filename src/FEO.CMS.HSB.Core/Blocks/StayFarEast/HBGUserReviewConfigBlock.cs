using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGUserReviewConfigBlock", GUID = "5BADED1A-7B63-455A-86C4-E6B4C72DBE65", GroupName = "Hospitality")]
    public class HBGUserReviewConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Show Review", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool ShowReview { get; set; }

    }
}
