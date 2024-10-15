using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.Outpost
{
    [ContentType(DisplayName = "HBGAmenityPage", GUID = "30FE1072-7CB0-43B7-B649-17203F07D233", GroupName = "Hospitality")]
    public class HBGAmenityPage : HBGBasePage
    {
        [Display(Name = "Oprating Hours", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        public virtual string OpratingHours { get; set; }

        [Display(Name = "Address", GroupName = "Basic Info", Order = 200)]
        [CultureSpecific]
        public virtual string Address { get; set; }

        [Display(Name = "Phone Number", GroupName = "Basic Info", Order = 300)]
        [CultureSpecific]
        public virtual string PhoneNumber { get; set; }

    }
}
