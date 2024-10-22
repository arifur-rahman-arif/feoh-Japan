using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaticArticlesContainerBlock", GUID = "7D26569E-C61C-4783-9EF7-CB759562D3C0", GroupName = "Hospitality")]
    public class HBGStaticArticlesContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Previews", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Previews { get; set; }

        [Display(Name = "Show All Button Link", GroupName = "Buttons", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem ShowAllButtonLink { get; set; }

    }
}
