using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationUserReviewsContainerBlock", GUID = "5ADC55A7-5226-4384-AD25-0A684605AB5B", GroupName = "Hospitality")]
    public class HBGStaycationUserReviewsContainerBlock : HBGBaseBlock
    {
        [Display(Name = "User Reviews Primary Title", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string UserReviewsPrimaryTitle { get; set; }

        [Display(Name = "BladeID", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string BladeID { get; set; }

        [Display(Name = "AllUserReviews", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [AllowedTypes(AllowedTypes = new[] { typeof(HBGUserReviewBlock) })]
        public virtual ContentReference AllUserReviews { get; set; }

    }
}
