using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGLocationPage", GUID = "2EA03382-4AD7-47A2-BA86-43F2F17A3D02", GroupName = "Hospitality")]
    public class HBGLocationPage : HBGBasePage
    {
        [Display(Name = "Country", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Country { get; set; }

    }
}
