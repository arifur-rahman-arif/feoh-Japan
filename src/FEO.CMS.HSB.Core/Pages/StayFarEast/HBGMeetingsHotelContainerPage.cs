using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGMeetingsHotelContainerPage", GUID = "058F0B89-663B-4C34-B181-5A9D9A1731F4", GroupName = "Hospitality")]
    public class HBGMeetingsHotelContainerPage : HBGBasePage
    {
        [CultureSpecific]
        public virtual string Address { get; set; }

        [Display(Name = "Phone Number", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string PhoneNumber { get; set; }

        [Display(Name = "Email Address", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual LinkItem EmailAddress { get; set; }

        [Display(Name = "Map URL", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual LinkItem MapURL { get; set; }
    }
}
