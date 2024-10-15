using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGItemRedirectionPage", GUID = "35CA0D14-19E7-4623-B9DA-1CF6B5735252", GroupName = "Hospitality")]
    public class HBGItemRedirectionPage : HBGBasePage
    {
        [Display(Name = "ItemPath", GroupName = "Settings", Order = 50)]
        [CultureSpecific]
        public virtual ContentReference ItemPath { get; set; }

        [Display(Name = "RedirectToItem", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference RedirectToItem { get; set; }

        [Display(Name = "RedirectToUrl", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual string RedirectToUrl { get; set; }

    }
}
