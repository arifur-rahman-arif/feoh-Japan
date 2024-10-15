using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGStaticAccomodationContainerBlock", GUID = "4139E18B-D337-4220-9647-2A52BFD808D6", GroupName = "Hospitality")]
    public class HBGStaticAccomodationContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Rooms", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Rooms { get; set; }

    }
}
