using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGHotelsAndResidencesBlock", GUID = "4DF751B7-FAB3-4668-BA84-DF9766EB8B79", GroupName = "Hospitality")]
    public class HBGHotelsAndResidencesBlock : HBGBaseBlock
    {
        [Display(Name = "Hotels", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Hotels { get; set; }

    }
}
