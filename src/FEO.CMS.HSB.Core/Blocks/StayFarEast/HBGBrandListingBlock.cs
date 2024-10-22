using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGBrandListingBlock", GUID = "9EFF1ED2-B23A-45F6-A5F6-F76E1FA3D76A", GroupName = "Hospitality")]
    public class HBGBrandListingBlock : HBGBaseBlock
    {
        [Display(Name = "Brands", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string Brands { get; set; }

    }
}
