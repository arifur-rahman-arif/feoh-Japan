using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.Village
{
    [ContentType(DisplayName = "HBGPropertyPage", GUID = "1379478B-AEBF-4856-93A6-B2A92F6CA047", GroupName = "Hospitality")]
    public class HBGPropertyPage : HBGBasePage
    {
        [Display(Name = "Label List", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea LabelList { get; set; }

        [Display(Name = "Map IFrame URL", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual string MapIFrameURL { get; set; }

        [Display(Name = "Meta Image", GroupName = "SEO", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference MetaImage { get; set; }

        [Display(Name = "Special Offer Description", GroupName = "SEO", Order = 200)]
        [CultureSpecific]
        public virtual string SpecialOfferDescription { get; set; }

        [Display(Name = "Special Offer Icon", GroupName = "SEO", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference SpecialOfferIcon { get; set; }

        [Display(Name = "USP List", GroupName = "SEO", Order = 500)]
        [CultureSpecific]
        public virtual ContentArea USPList { get; set; }

    }
}
