using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGSeatingConfigurationItemBlock", GUID = "C5042716-4A85-4B9E-9DE6-C3B7DFC005AA", GroupName = "Hospitality")]
    public class HBGSeatingConfigurationItemBlock : HBGBaseBlock
    {
        [Display(Name = "Capacity", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual int Capacity { get; set; }

        [Display(Name = "Icon", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual ContentReference Icon { get; set; }

    }
}
