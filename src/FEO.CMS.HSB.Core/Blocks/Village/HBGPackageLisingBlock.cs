using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGPackageLisingBlock", GUID = "2732800D-5C32-4AC2-8BB8-5D03308EEA7A", GroupName = "Hospitality")]
    public class HBGPackageLisingBlock : HBGBaseBlock
    {
        [Display(Name = "Packages", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Packages { get; set; }

    }
}
