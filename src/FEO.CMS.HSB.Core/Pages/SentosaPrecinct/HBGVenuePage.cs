using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGVenuePage", GUID = "25272EA7-A96E-44B2-BB60-B9BA1415CA33", GroupName = "Hospitality")]
    public class HBGVenuePage : HBGBasePage
    {
        [Display(Name = "Enquire Now", GroupName = "Section", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem EnquireNow { get; set; }

        [Display(Name = "Venue Link", GroupName = "Section", Order = 200)]
        [CultureSpecific]
        public virtual LinkItem VenueLink { get; set; }

    }
}
