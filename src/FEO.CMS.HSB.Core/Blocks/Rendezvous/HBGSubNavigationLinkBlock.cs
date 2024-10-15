using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Rendezvous
{
    [ContentType(DisplayName = "HBGSubNavigationLinkBlock", GUID = "A7BAED91-3E43-40C1-822E-F9C586D12194", GroupName = "Hospitality")]
    public class HBGSubNavigationLinkBlock : HBGBaseBlock
    {
        [Display(Name = "MainLink", GroupName = "Link Details", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem MainLink { get; set; }

        [Display(Name = "Title", GroupName = "Link Details", Order = 200)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "LinkColor", GroupName = "Link Details", Order = 300)]
        [CultureSpecific]
        public virtual bool LinkColor { get; set; }

        [Display(Name = "IsSBELink", GroupName = "Link Details", Order = 400)]
        [CultureSpecific]
        public virtual bool IsSBELink { get; set; }

    }
}
