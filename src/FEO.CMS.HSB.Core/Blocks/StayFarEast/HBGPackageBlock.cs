using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGPackageBlock", GUID = "E12E37CD-5C5D-4D2E-989A-69A5BDB8D152", GroupName = "Hospitality")]
    public class HBGPackageBlock : HBGBaseBlock
    {
        [Display(Name = "Venues", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Venues { get; set; }

        [Display(Name = "HotelTitle", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string HotelTitle { get; set; }

        [Display(Name = "PhoneNumber", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString PhoneNumber { get; set; }

        [Display(Name = "Email", GroupName = "Content", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Email { get; set; }

        [Display(Name = "Hotel", GroupName = "Content", Order = 600)]
        [CultureSpecific]
        public virtual ContentReference Hotel { get; set; }

        [Display(Name = "Download Venue", GroupName = "Content", Order = 700)]
        [CultureSpecific]
        [UIHint(UIHint.MediaFile)]
        public virtual ContentReference DownloadVenue { get; set; }

        [Display(Name = "Venue Description", GroupName = "Content", Order = 800)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString VenueDescription { get; set; }

        [Display(Name = "Terms And Conditions Title", GroupName = "Content", Order = 900)]
        [CultureSpecific]
        public virtual string TermsAndConditionsTitle { get; set; }

        [Display(Name = "Terms And Conditions Description", GroupName = "Content", Order = 1000)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString TermsAndConditionsDescription { get; set; }

        [Display(Name = "Hotel Address", GroupName = "Content", Order = 1100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString HotelAddress { get; set; }

    }
}
