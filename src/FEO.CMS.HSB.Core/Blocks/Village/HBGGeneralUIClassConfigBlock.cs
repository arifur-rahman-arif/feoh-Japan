using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGGeneralUIClassConfigBlock", GUID = "3A5A20D9-29E5-4629-B9BE-83FAB45569C4", GroupName = "Hospitality")]
    public class HBGGeneralUIClassConfigBlock : HBGBaseBlock
    {
        [Display(Name = "ComponentClass", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference ComponentClass { get; set; }

    }
}
