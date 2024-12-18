using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGMultiMediaCarouselFolderBlock", GUID = "19B54932-67F3-4BCD-8BAD-4E12FB4E87C6", GroupName = "Hospitality")]
    public class HBGMultiMediaCarouselFolderBlock : HBGBaseBlock
    {
        [Display(Name = "Children Reference 1", GroupName = "Content", Order = 12)]
        [CultureSpecific]
        public virtual ContentReference ChildrenReference { get; set; }
    }
}
