using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.Outpost
{
    [ContentType(DisplayName = "HBGDetailPagePage", GUID = "71CBA251-78C5-4CA0-B1B3-3A090742A1F2", GroupName = "Hospitality")]
    public class HBGDetailPagePage : HBGBasePage
    {
        [Display(Name = "Phone Number", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string PhoneNumber { get; set; }

    }
}
