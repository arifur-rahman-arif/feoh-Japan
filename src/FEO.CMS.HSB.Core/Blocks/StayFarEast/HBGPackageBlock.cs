using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGPackageBlock", GUID = "E12E37CD-5C5D-4D2E-989A-69A5BDB8D152", GroupName = "Hospitality")]
    public class HBGPackageBlock : HBGViewBlock
    {
        [Display(Name = "Venues", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Venues { get; set; }

        [Display(Name = "HotelTitle", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string HotelTitle { get; set; }

        [Display(Name = "PhoneNumber", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString PhoneNumber { get; set; }

        [Display(Name = "Email", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Email { get; set; }

        [Display(Name = "Hotel", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        public virtual ContentReference Hotel { get; set; }

        [Display(Name = "Download Venue", GroupName = SystemTabNames.Content, Order = 700)]
        [CultureSpecific]
        [UIHint(UIHint.MediaFile)]
        public virtual ContentReference DownloadVenue { get; set; }

        [Display(Name = "Venue Description", GroupName = SystemTabNames.Content, Order = 800)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString VenueDescription { get; set; }

        [Display(Name = "Terms And Conditions Title", GroupName = SystemTabNames.Content, Order = 900)]
        [CultureSpecific]
        public virtual string TermsAndConditionsTitle { get; set; }

        [Display(Name = "Terms And Conditions Description", GroupName = SystemTabNames.Content, Order = 1000)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString TermsAndConditionsDescription { get; set; }

        [Display(Name = "Hotel Address", GroupName = SystemTabNames.Content, Order = 1100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString HotelAddress { get; set; }

    }
}
