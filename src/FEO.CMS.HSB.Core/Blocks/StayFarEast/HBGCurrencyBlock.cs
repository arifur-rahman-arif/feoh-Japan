using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGCurrencyBlock", GUID = "7CB84914-3EAC-418A-9885-2DC370918D7C", GroupName = "Hospitality")]
    public class HBGCurrencyBlock : HBGBaseBlock
    {
        [Display(Name = "ISO Code", GroupName = "Profile", Order = 100)]
        [CultureSpecific]
        public virtual string ISOCode { get; set; }

        [Display(Name = "Symbol", GroupName = "Profile", Order = 200)]
        [CultureSpecific]
        public virtual string Symbol { get; set; }

    }
}
