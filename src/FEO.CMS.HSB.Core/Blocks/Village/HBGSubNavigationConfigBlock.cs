using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGSubNavigationConfigBlock", GUID = "EE40EA20-818E-481F-B937-D8B32C42B732", GroupName = "Hospitality")]
    public class HBGSubNavigationConfigBlock : HBGBaseBlock
    {
        [Display(Name = "SubNavigation Id", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference SubNavigationId { get; set; }

    }
}
