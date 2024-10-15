using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGAmenitiesContainerConfigBlock", GUID = "5181A49C-AE79-4BEF-81C9-D3DFA1127567", GroupName = "Hospitality")]
    public class HBGAmenitiesContainerConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Gallery List", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual string GalleryList { get; set; }

        [Display(Name = "Hide Services Section", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual bool HideServicesSection { get; set; }

    }
}
