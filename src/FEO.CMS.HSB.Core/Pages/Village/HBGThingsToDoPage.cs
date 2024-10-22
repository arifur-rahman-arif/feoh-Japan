using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.Village
{
    [ContentType(DisplayName = "HBGThingsToDoPage", GUID = "94EE04F4-9EFD-417A-BAE1-10BD44E05E51", GroupName = "Hospitality")]
    public class HBGThingsToDoPage : HBGBasePage
    {
        [Display(Name = "Result Count", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual string ResultCount { get; set; }

        [Display(Name = "Property", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        public virtual ContentReference Property { get; set; }

    }
}
