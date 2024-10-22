using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.Village
{
    [ContentType(DisplayName = "HBGPackagePage", GUID = "DFE2C914-3585-4B75-BB06-BEEF765B6C9A", GroupName = "Hospitality")]
    public class HBGPackagePage : HBGBasePage
    {
        [Display(Name = "Main Content Title", GroupName = SystemTabNames.Content, Order = 25)]
        [CultureSpecific]
        public virtual string MainContentTitle { get; set; }

        [Display(Name = "Main Content", GroupName = SystemTabNames.Content, Order = 50)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString MainContent { get; set; }

        [Display(Name = "Terms And Conditions Title", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string TermsAndConditionsTitle { get; set; }

        [Display(Name = "Terms And Conditions Description", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString TermsAndConditionsDescription { get; set; }

        [Display(Name = "Preview Images", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual string PreviewImages { get; set; }

        [Display(Name = "MinCapacity", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual string MinCapacity { get; set; }

        [Display(Name = "Capacity Range", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        public virtual ContentArea CapacityRange { get; set; }

        [Display(Name = "SpecialOfferDescription", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        public virtual string SpecialOfferDescription { get; set; }

        [Display(Name = "SpecialOfferIcon", GroupName = SystemTabNames.Content, Order = 700)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference SpecialOfferIcon { get; set; }

        [Display(Name = "EnquiryNow", GroupName = SystemTabNames.Content, Order = 800)]
        [CultureSpecific]
        public virtual LinkItem EnquiryNow { get; set; }

    }
}
