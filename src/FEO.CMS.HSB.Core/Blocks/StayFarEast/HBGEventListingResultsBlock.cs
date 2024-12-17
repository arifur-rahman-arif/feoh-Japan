using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGEventListingResultsBlock", GUID = "3A23C8C2-FB52-49A8-B2FE-9A4B43A81D71", GroupName = "Hospitality")]
    public class HBGEventListingResultsBlock : HBGBaseBlock
    {
        [Display(Name = "Event Type Default Tab", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference EventTypeDefaultTab { get; set; }

    }
}
