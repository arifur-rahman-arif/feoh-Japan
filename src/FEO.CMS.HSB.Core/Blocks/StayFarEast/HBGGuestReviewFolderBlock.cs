using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGGuestReviewFolderBlock", GUID = "88434728-1483-494D-B2E6-38995CC9FE77", GroupName = "Hospitality")]
    public class HBGGuestReviewFolderBlock : HBGGuestReviewSortingConfigBlock
    {
        [Display(Name = "ChildrenFolderReference", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        //[AllowedTypes(AllowedTypes = new[] { typeof() })]
        public virtual ContentReference ChildrenFolderReference { get; set; }
    }
}
