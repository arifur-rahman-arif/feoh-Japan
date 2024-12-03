using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaticPreviewsContainerBlock", GUID = "F82059AA-59F9-4D35-851C-85910EBEE412", GroupName = "Hospitality")]
    public class HBGStaticPreviewsContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Previews", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Previews { get; set; }

        [Display(Name = "Show All Button Link", GroupName = "Buttons", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem ShowAllButtonLink { get; set; }

    }
}
