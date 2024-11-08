using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGShowAllLinkBlock", GUID = "B9A6EA89-20C7-4111-9351-66DAA8570504", GroupName = "Hospitality")]
    public class HBGShowAllLinkBlock : HBGBaseBlock
    {
        [Display(Name = "Show All Button Link", GroupName = "Buttons", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem ShowAllButtonLink { get; set; }

    }
}
