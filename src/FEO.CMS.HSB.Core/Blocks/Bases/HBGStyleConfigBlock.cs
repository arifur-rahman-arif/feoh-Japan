using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGStyleConfigBlock", GroupName = "Hospitality")]
    public class HBgStyleConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Style Names", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference StyleNames { get; set; }
    }

}