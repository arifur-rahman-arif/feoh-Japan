using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGFooterBlock", GUID = "44654E1C-3C1D-442D-AEDD-00F0715FB5CD", GroupName = "Hospitality")]
    public class HBGFooterBlock : HBGBaseBlock
    {
        [Display(Name = "Our Brands", GroupName = "Menu", Order = 50)]
        [CultureSpecific]
        public virtual string OurBrands { get; set; }

        [Display(Name = "Brand Links", GroupName = "Menu", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea BrandLinks { get; set; }

        [Display(Name = "Copyright", GroupName = "Menu", Order = 100)]
        [CultureSpecific]
        public virtual string Copyright { get; set; }

        [Display(Name = "Facebook Icon", GroupName = "Buttons", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference FacebookIcon { get; set; }

        [Display(Name = "Logo Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LogoImage { get; set; }

        [Display(Name = "Facebook Link", GroupName = "Buttons", Order = 200)]
        [CultureSpecific]
        public virtual LinkItem FacebookLink { get; set; }

        [Display(Name = "Hotel Email", GroupName = "Buttons", Order = 200)]
        [CultureSpecific]
        public virtual LinkItem HotelEmail { get; set; }

        [Display(Name = "Primary Links", GroupName = "Menu", Order = 200)]
        [CultureSpecific]
        public virtual ContentArea PrimaryLinks { get; set; }

        [Display(Name = "Affiliate Hotels", GroupName = "Menu", Order = 250)]
        [CultureSpecific]
        public virtual string AffiliateHotels { get; set; }

        [Display(Name = "Mobile Facebook Link", GroupName = "Buttons", Order = 250)]
        [CultureSpecific]
        public virtual LinkItem MobileFacebookLink { get; set; }

        [Display(Name = "Affiliate Brands", GroupName = "Menu", Order = 275)]
        [CultureSpecific]
        public virtual ContentArea AffiliateBrands { get; set; }

        [Display(Name = "Hotels Reservations", GroupName = "Menu", Order = 300)]
        [CultureSpecific]
        public virtual string HotelsReservations { get; set; }

        [Display(Name = "Logo URL", GroupName = "Buttons", Order = 300)]
        [CultureSpecific]
        public virtual LinkItem LogoURL { get; set; }

        [Display(Name = "Partner Hotels", GroupName = "Menu", Order = 300)]
        [CultureSpecific]
        public virtual string PartnerHotels { get; set; }

        [Display(Name = "Partner Brands", GroupName = "Menu", Order = 400)]
        [CultureSpecific]
        public virtual ContentArea PartnerBrands { get; set; }

        [Display(Name = "Primary Contact Country", GroupName = "Menu", Order = 400)]
        [CultureSpecific]
        public virtual ContentReference PrimaryContactCountry { get; set; }

        [Display(Name = "Twitter Icon", GroupName = "Buttons", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference TwitterIcon { get; set; }

        [Display(Name = "Footer Message", GroupName = "Menu", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString FooterMessage { get; set; }

        [Display(Name = "Primary Contact Number", GroupName = "Menu", Order = 500)]
        [CultureSpecific]
        public virtual string PrimaryContactNumber { get; set; }

        [Display(Name = "Twitter Link", GroupName = "Buttons", Order = 500)]
        [CultureSpecific]
        public virtual LinkItem TwitterLink { get; set; }

        [Display(Name = "Secondary Contact Country", GroupName = "Buttons", Order = 600)]
        [CultureSpecific]
        public virtual ContentReference SecondaryContactCountry { get; set; }

        [Display(Name = "Youtube Icon", GroupName = "Buttons", Order = 600)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference YoutubeIcon { get; set; }

        [Display(Name = "Secondary Contact Number", GroupName = "Buttons", Order = 700)]
        [CultureSpecific]
        public virtual string SecondaryContactNumber { get; set; }

        [Display(Name = "Youtube Link", GroupName = "Buttons", Order = 700)]
        [CultureSpecific]
        public virtual LinkItem YoutubeLink { get; set; }

        [Display(Name = "Serviced Residences Email", GroupName = "Buttons", Order = 800)]
        [CultureSpecific]
        public virtual LinkItem ServicedResidencesEmail { get; set; }

        [Display(Name = "Serviced Residences Reservations", GroupName = "Buttons", Order = 900)]
        [CultureSpecific]
        public virtual string ServicedResidencesReservations { get; set; }

        [Display(Name = "Tertiary Contact Country", GroupName = "Buttons", Order = 1000)]
        [CultureSpecific]
        public virtual ContentReference TertiaryContactCountry { get; set; }

        [Display(Name = "Tertiary Contact Number", GroupName = "Buttons", Order = 1100)]
        [CultureSpecific]
        public virtual string TertiaryContactNumber { get; set; }

    }
}
