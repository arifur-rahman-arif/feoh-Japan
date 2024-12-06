using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGPackageListingBlock", GUID = "8DC3455E-9217-4A1E-9A21-65B3F9B2C061", GroupName = "Hospitality")]
    public class HBGPackageListingBlock : HBGBaseBlock
    {
        [Display(Name = "Packages", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Packages { get; set; }

        [Display(Name = "Package Link Text", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string PackageLinkText { get; set; }

    }
}
