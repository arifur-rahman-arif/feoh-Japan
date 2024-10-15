using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGGuestReviewItemBlock", GUID = "DBEFC76C-2CDC-47AB-A2D8-A8149278E3D8", GroupName = "Hospitality")]
    public class HBGGuestReviewItemBlock : HBGBaseBlock
    {
        [Display(Name = "Name Of Review", GroupName = "Profile", Order = 50)]
        [CultureSpecific]
        public virtual string NameOfReview { get; set; }

        [Display(Name = "Date Of Review", GroupName = "Profile", Order = 100)]
        [CultureSpecific]
        public virtual DateTime DateOfReview { get; set; }

        [Display(Name = "Platform Of Review", GroupName = "Profile", Order = 300)]
        [CultureSpecific]
        public virtual LinkItem PlatformOfReview { get; set; }

    }
}
