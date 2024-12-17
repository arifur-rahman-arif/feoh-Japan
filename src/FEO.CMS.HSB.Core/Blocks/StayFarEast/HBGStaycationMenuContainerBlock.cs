using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationMenuContainerBlock", GUID = "CD6F0EEC-38D2-4BA1-8881-17E15BB02F73", GroupName = "Hospitality")]
    public class HBGStaycationMenuContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Primary Title", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string PrimaryTitle { get; set; }

        [Display(Name = "Menus", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Menus { get; set; }
    }
}
