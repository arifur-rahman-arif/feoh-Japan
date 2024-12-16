using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Rendezvous
{
    [ContentType(DisplayName = "HBGNavigationLinkBlock", GUID = "078A84B6-BE89-4CDD-B971-0FF9C20C9FA5", GroupName = "Hospitality")]
    public class HBGNavigationLinkBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = "Link Details", Order = 50)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "ReferenceLink", GroupName = "Link Details", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem ReferenceLink { get; set; }

        [Display(Name = "See All", GroupName = "Link Details", Order = 400)]
        [CultureSpecific]
        public virtual LinkItem SeeAll { get; set; }

        [Display(Name = "SeeAllLink", GroupName = "Link Details", Order = 600)]
        [CultureSpecific]
        public virtual LinkItem SeeAllLink { get; set; }

        [Display(Name = "SeeAllText", GroupName = "Link Details", Order = 700)]
        [CultureSpecific]
        public virtual string SeeAllText { get; set; }

        [Display(Name = "SeeAllIn", GroupName = "Link Details", Order = 800)]
        [CultureSpecific]
        public virtual string SeeAllIn { get; set; }

        [Display(Name = "SortText", GroupName = "Link Details", Order = 900)]
        [CultureSpecific]
        public virtual string SortText { get; set; }

        [Display(Name = "BottomLink", GroupName = "Link Details", Order = 1000)]
        [CultureSpecific]
        public virtual bool BottomLink { get; set; }

        [Display(Name = "IsBrand", GroupName = "Link Details", Order = 1100)]
        [CultureSpecific]
        public virtual bool IsBrand { get; set; }

        [Display(Name = "CssClass", GroupName = "Link Details", Order = 1200)]
        [CultureSpecific]
        public virtual ContentReference CssClass { get; set; }

        [Display(Name = "IsInExtensionMenu", GroupName = "Link Details", Order = 1300)]
        [CultureSpecific]
        public virtual bool IsInExtensionMenu { get; set; }

        [Display(Name = "IsDeal", GroupName = "Link Details", Order = 1400)]
        [CultureSpecific]
        public virtual bool IsDeal { get; set; }
        //[Ignore]
        //public IEnumerable<HBGNavigationLinkBlock> MenuLinks { get; set; }
        [Ignore]
        public IEnumerable<HBGSubNavigationLinkBlock> SubnavigationLinks { get; set; }
        [Display(Name = "SortOrder", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual int SortOrder { get; set; }
    }
}
