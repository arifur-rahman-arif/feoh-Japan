using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGRedirectionPage", GUID = "285538DB-9F17-4D0D-87E8-D61B63E8EF0A", GroupName = "Hospitality")]
    public class HBGRedirectionPage : HBGBasePage
    {
        [Display(Name = "Redirect URL", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual LinkItem RedirectURL { get; set; }

        [Display(Name = "Redirect Url For Mobile", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual LinkItem RedirectUrlForMobile { get; set; }

        [Display(Name = "Redirect Url For Tablet", GroupName = SystemTabNames.Settings, Order = 300)]
        [CultureSpecific]
        public virtual LinkItem RedirectUrlForTablet { get; set; }

    }
}
