using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGRelatedPackageBlock", GUID = "1C46E7A1-A16C-4465-A0E6-F52BB79187F9", GroupName = "Hospitality")]
    public class HBGRelatedPackageBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = "Related Packages", Order = 550)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Sub Title", GroupName = "Related Packages", Order = 825)]
        [CultureSpecific]
        public virtual XhtmlString SubTitle { get; set; }

        [Display(Name = "Participating Packages", GroupName = "Related Packages", Order = 1100)]
        [CultureSpecific]
        public virtual ContentArea ParticipatingPackages { get; set; }

        [Display(Name = "View All Package URL", GroupName = "Related Packages", Order = 1200)]
        [CultureSpecific]
        public virtual LinkItem ViewAllPackageURL { get; set; }

    }
}
