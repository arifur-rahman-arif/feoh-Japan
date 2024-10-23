using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGEventSpecialistListBlock", GUID = "FC93DD2A-EBCD-4CF9-BC2B-155184859B3E", GroupName = "Hospitality")]
    public class HBGEventSpecialistListBlock : HBGBaseBlock
    {
        [Display(Name = "Event Specialist", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea EventSpecialist { get; set; }

    }
}
