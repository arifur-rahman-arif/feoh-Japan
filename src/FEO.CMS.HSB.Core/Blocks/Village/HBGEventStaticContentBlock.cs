using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGEventStaticContentBlock", GUID = "49717DBB-03C5-4D3C-9F96-E7707BC31986", GroupName = "Hospitality")]
    public class HBGEventStaticContentBlock : HBGStaticContentBlock
    {
        [Display(Name = "Icon List", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea IconList { get; set; }

        [Display(Name = "Button", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual LinkItem Button { get; set; }

    }
}
