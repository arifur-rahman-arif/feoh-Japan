using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGVideoSourceBlock", GUID = "63885092-3C18-4C63-811D-9DE99E62DDF9", GroupName = "Hospitality")]
    public class HBGVideoSourceBlock : HBGBaseBlock
    {
        [Display(Name = "Source", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem Source { get; set; }

        [Display(Name = "Type", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual string Type { get; set; }

    }
}
