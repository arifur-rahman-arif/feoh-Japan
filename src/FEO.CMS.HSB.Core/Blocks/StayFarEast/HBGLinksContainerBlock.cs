using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGLinksContainerBlock", GUID = "C344F224-E3DB-4538-A993-D68339FFFE9D", GroupName = "Hospitality")]
    public class HBGLinksContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Primary Link", GroupName = "Buttons", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem PrimaryLink { get; set; }

        [Display(Name = "Secondary Link", GroupName = "Buttons", Order = 200)]
        [CultureSpecific]
        public virtual LinkItem SecondaryLink { get; set; }

    }
}
