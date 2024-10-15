using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGRelatedVenueBlock", GUID = "C3F6DE8B-20CF-4569-AFEF-697B834E3B31", GroupName = "Hospitality")]
    public class HBGRelatedVenueBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = "Related Venues", Order = 200)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Sub Title", GroupName = "Related Venues", Order = 300)]
        [CultureSpecific]
        public virtual XhtmlString SubTitle { get; set; }

        [Display(Name = "Participating Venues", GroupName = "Related Venues", Order = 400)]
        [CultureSpecific]
        public virtual ContentArea ParticipatingVenues { get; set; }

        [Display(Name = "View All Venue URL", GroupName = "Related Venues", Order = 500)]
        [CultureSpecific]
        public virtual LinkItem ViewAllVenueURL { get; set; }

    }
}
