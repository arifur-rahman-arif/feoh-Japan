using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGVenueHighlightBlock", GUID = "1E59E1CB-871D-4B67-94C8-8D935259516D", GroupName = "Hospitality")]
    public class HBGVenueHighlightBlock : HBGVenueHighlightConfigurationBlock
    {
        [Display(Name = "Title", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Location", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string Location { get; set; }

        [Display(Name = "Contact Number", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual string ContactNumber { get; set; }

        [Display(Name = "Website", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual LinkItem Website { get; set; }

        [Display(Name = "Opening Hours", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        public virtual XhtmlString OpeningHours { get; set; }

    }
}
