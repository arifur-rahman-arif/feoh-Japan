using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGPackageContainerBlock", GUID = "22C561AA-D2D9-4CD8-A37E-1AEEA33FB048", GroupName = "Hospitality")]
    public class HBGPackageContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Packages Of Events", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea PackagesOfEvents { get; set; }

    }
}
