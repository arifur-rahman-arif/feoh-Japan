using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGVenuePreviewBlock", GUID = "0032A89F-73B6-436A-8F8F-8C71D49B5E35", GroupName = "Hospitality")]
    public class HBGVenuePreviewBlock : HBGBaseBlock
    {
        [Display(Name = "Venue Location", GroupName = "Content", Order = 600)]
        [CultureSpecific]
        public virtual string VenueLocation { get; set; }

        [Display(Name = "Venue Room Size", GroupName = "Content", Order = 700)]
        [CultureSpecific]
        public virtual double VenueRoomSize { get; set; }

        [Display(Name = "Venue Room Features", GroupName = "Content", Order = 800)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString VenueRoomFeatures { get; set; }

        [Display(Name = "Venue Floor Plan Image", GroupName = "Content", Order = 900)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference VenueFloorPlanImage { get; set; }

        [Display(Name = "Venue Floor Plan File", GroupName = "Content", Order = 950)]
        [CultureSpecific]
        public virtual LinkItem VenueFloorPlanFile { get; set; }

        [Display(Name = "Tour URL", GroupName = "Content", Order = 1050)]
        [CultureSpecific]
        public virtual string TourURL { get; set; }

    }
}
