using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGEventSpecialistConfigBlock", GUID = "D706EEE7-5499-444F-9B26-2B5ED41A0012", GroupName = "Hospitality")]
    public class HBGEventSpecialistConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Show sub-title", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual bool ShowSubtitle { get; set; }

    }
}
