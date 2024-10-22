using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.Village
{
    [ContentType(DisplayName = "HBGArticlePage", GUID = "21BC62A0-1D0A-4F3E-BA2D-EA6632AD6CE5", GroupName = "Hospitality")]
    public class HBGArticlePage : HBGBasePage
    {
        [Display(Name = "Enable More Info Link", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual bool EnableMoreInfoLink { get; set; }

    }
}
