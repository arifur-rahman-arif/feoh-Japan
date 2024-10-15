using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGGuestReviewSortingConfigBlock", GUID = "5CC1C387-52EB-4E24-B242-E3C50ECD2FB0", GroupName = "Hospitality")]
    public class HBGGuestReviewSortingConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Sort By", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference SortBy { get; set; }

    }
}
