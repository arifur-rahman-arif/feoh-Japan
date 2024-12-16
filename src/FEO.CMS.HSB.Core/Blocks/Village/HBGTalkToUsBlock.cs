using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGTalkToUsBlock", GUID = "81B74261-A79F-4534-A34F-55DF921FAA74", GroupName = "Hospitality")]
    public class HBGTalkToUsBlock : HBGBaseBlock
    {
        [Display(Name = "Property", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Property { get; set; }

    }
}
