using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGTabHeaderBlock", GUID = "E504FC8B-25D9-4C75-8006-5666797C1D06", GroupName = "Hospitality")]
    public class HBGTabHeaderBlock : HBGBaseBlock
    {
        [Display(Name = "Active", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual bool Active { get; set; }

        [Display(Name = "Tab Value", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual string TabValue { get; set; }

        [Display(Name = "Anchor", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual LinkItem Anchor { get; set; }

    }
}
