using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Pages.StayFarEast;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGApartmentTourBlock", GUID = "EC257302-4F31-43FB-8AE2-CD5817CE0B00", GroupName = "Hospitality")]
    public class HBGApartmentTourBlock : HBGHighlightContainerConfigBlock
    {
        [Ignore]
        public virtual HBGApartmentPage HBGApartmentPage { get; set; }
    }
}
