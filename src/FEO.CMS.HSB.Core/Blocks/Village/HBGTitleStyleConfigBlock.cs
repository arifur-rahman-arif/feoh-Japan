using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGTitleStyleConfigBlock", GUID = "F14254D3-B632-4AF4-B816-9812F7E56F4D", GroupName = "Hospitality")]
    public class HBGTitleStyleConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Title colour", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Titlecolour { get; set; }

    }
}
