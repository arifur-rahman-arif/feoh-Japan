using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGImageCarouselBlock", GUID = "4084F096-E316-43FE-8456-9A26110566EF", GroupName = "Hospitality")]
    public class HBGImageCarouselBlock : HBGStickySummaryConfigBlock
    {
        [Display(Name = "Children Reference", GroupName = "Content", Order = 12)]
        [CultureSpecific]
        public virtual ContentReference ChildrenReference { get; set; }
    }
}
