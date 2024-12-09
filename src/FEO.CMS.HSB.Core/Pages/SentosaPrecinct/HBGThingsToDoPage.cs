using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGThingsToDoPage", GUID = "C0760293-1C2E-4C03-A8EE-1A619D1BA2B3", GroupName = "Hospitality")]
    public class HBGThingsToDoPage : HBGBasePage
    {
        [Display(Name = "Address", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string Address { get; set; }

        [Display(Name = "Category", GroupName = "Profile", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Category { get; set; }

        [Display(Name = "Operating Hours", GroupName = "Profile", Order = 200)]
        [CultureSpecific]
        public virtual string OperatingHours { get; set; }

        [Display(Name = "IsPrivate", GroupName = "Profile", Order = 300)]
        [CultureSpecific]
        public virtual bool IsPrivate { get; set; }

        [Display(Name = "Enable Learn More Link", GroupName = "Profile", Order = 400)]
        [CultureSpecific]
        public virtual bool EnableLearnMoreLink { get; set; }

    }
}
