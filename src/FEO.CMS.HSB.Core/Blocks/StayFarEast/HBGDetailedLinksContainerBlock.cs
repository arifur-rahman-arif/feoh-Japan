using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGDetailedLinksContainerBlock", GUID = "383A69E0-673B-4392-B687-ED3D4CA16DC8", GroupName = "Hospitality")]
    public class HBGDetailedLinksContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Detailed Links", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea DetailedLinks { get; set; }

    }
}
