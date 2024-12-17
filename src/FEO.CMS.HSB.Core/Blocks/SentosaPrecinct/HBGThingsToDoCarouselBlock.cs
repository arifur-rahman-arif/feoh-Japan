using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGThingsToDoCarouselBlock", GUID = "3E762512-E1A1-4635-B355-80FD562BAB0D", GroupName = "Hospitality")]
    public class HBGThingsToDoCarouselBlock : HBGBaseBlock
    {
        [Display(Name = "Things To Do", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea ThingsToDo { get; set; }

    }
}
