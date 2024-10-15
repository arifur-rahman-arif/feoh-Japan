using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Clan
{
    [ContentType(DisplayName = "HBGComponentClassConfigBlock", GUID = "01529FDB-D7B1-4525-AD38-8DEB1C88FC95", GroupName = "Hospitality")]
    public class HBGComponentClassConfigBlock : HBGBaseBlock
    {
        [Display(Name = "ComponentClass", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference ComponentClass { get; set; }

    }
}
