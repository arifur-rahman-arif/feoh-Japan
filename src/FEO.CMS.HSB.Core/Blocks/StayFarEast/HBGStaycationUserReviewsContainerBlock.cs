using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationUserReviewsContainerBlock", GUID = "5ADC55A7-5226-4384-AD25-0A684605AB5B", GroupName = "Hospitality")]
    public class HBGStaycationUserReviewsContainerBlock : HBGBaseBlock
    {
        [Display(Name = "User Reviews Primary Title", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string UserReviewsPrimaryTitle { get; set; }

        [Display(Name = "BladeID", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string BladeID { get; set; }

    }
}
