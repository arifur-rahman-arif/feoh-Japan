using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGFormPage", GUID = "E21686A7-C96A-49DC-9036-46A9C66873A8", GroupName = "Hospitality")]
    public class HBGFormPage : HBGBasePage
    {
        [Display(Name = "Terms Conditions Title", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string TermsConditionsTitle { get; set; }

        [Display(Name = "Terms Conditions Content", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString TermsConditionsContent { get; set; }

        [Display(Name = "Form Title", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual string FormTitle { get; set; }

        [Display(Name = "Form Content", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString FormContent { get; set; }

    }
}
