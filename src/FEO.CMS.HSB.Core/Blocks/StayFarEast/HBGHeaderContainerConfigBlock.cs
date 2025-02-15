using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGHeaderContainerConfigBlock", GUID = "D71714E0-8C16-4903-9618-DF4BA070EBC8", GroupName = "Hospitality")]
    public class HBGHeaderContainerConfigBlock : StayFarEastHBGStyleConfigBlock
    {
        [Display(Name = "Component ID", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference ComponentID { get; set; }

        [Display(Name = "Title", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Sub Title", GroupName = SystemTabNames.Settings, Order = 300)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

    }
}
