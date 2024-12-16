using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGVillageAmenitiesContainerConfigBlock", GUID = "B7DE4AD3-3290-4620-B185-CA05A8C77065", GroupName = "Hospitality")]
    public class HBGVillageAmenitiesContainerConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Hide Services Section", GroupName = SystemTabNames.Settings, Order = 50)]
        [CultureSpecific]
        public virtual bool HideServicesSection { get; set; }

    }
}
