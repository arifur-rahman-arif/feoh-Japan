using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGPackageListingBlock", GUID = "66C214B3-7FBF-40EC-8DE7-73A6918E49AE", GroupName = "Hospitality")]
    public class HBGPackageListingBlock : HBGBaseBlock
    {
        [Display(Name = "Packages", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Packages { get; set; }

    }
}
