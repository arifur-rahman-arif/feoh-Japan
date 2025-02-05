using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGAmenitiesContainerConfigBlock", GUID = "5181A49C-AE79-4BEF-81C9-D3DFA1127567", GroupName = "Hospitality")]
    public class HBGAmenitiesContainerConfigBlock : HBGRootBlock
    {
        [Display(Name = "Gallery List", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual string GalleryList { get; set; }

        [Display(Name = "Hide Services Section", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual bool HideServicesSection { get; set; }

    }
}
