using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGArticlesPage", GUID = "DB369947-1EAA-4D80-85C0-64369012AC74", GroupName = "Hospitality")]
    public class HBGArticlesPage : HBGBasePage
    {
        [Display(Name = "Date", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual DateTime Date { get; set; }

        [Display(Name = "Location", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual ContentReference Location { get; set; }

    }
}
