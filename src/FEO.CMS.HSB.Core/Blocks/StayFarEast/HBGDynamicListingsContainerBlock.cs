using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGDynamicListingsContainerBlock", GUID = "28E62B8C-B117-404E-8FDC-FA55D66D5C3E", GroupName = "Hospitality")]
    public class HBGDynamicListingsContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Brand", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Brand { get; set; }

        [Display(Name = "Type", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual ContentReference Type { get; set; }

    }
}
