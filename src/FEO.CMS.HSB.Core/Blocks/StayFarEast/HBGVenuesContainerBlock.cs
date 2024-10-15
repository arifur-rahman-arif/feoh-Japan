using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGVenuesContainerBlock", GUID = "BD541FBE-90E2-43C0-91F0-015102F9064C", GroupName = "Hospitality")]
    public class HBGVenuesContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Venues", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Venues { get; set; }

    }
}
