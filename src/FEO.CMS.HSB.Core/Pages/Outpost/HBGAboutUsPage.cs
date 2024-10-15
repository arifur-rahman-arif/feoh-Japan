using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.Outpost
{
    [ContentType(DisplayName = "HBGAboutUsPage", GUID = "83070D98-9D8C-462C-AC7E-C1BB528F80F9", GroupName = "Hospitality")]
    public class HBGAboutUsPage : HBGBasePage
    {
        [Display(Name = "Badges", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual ContentArea Badges { get; set; }

    }
}
