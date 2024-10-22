using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGViewBlock", GUID = "98ABC7C2-A215-4A38-8514-C0592EA0F358", GroupName = "Hospitality")]
    public class HBGViewBlock : HBGThumbnailPreviewBlock
    {
        [Display(Name = "Open Graph Image", GroupName = "SEO", Order = 50)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference OpenGraphImage { get; set; }

        [Display(Name = "Open Graph Type", GroupName = "SEO", Order = 75)]
        [CultureSpecific]
        public virtual ContentReference OpenGraphType { get; set; }

        [Display(Name = "Body Class Name", GroupName = "UI", Order = 100)]
        [CultureSpecific]
        public virtual string BodyClassName { get; set; }

        [Display(Name = "First Publish Date", GroupName = "Publishing", Order = 100)]
        [CultureSpecific]
        public virtual DateTime FirstPublishDate { get; set; }

        [Display(Name = "Indexable", GroupName = "Indexing", Order = 100)]
        [CultureSpecific]
        public virtual bool Indexable { get; set; }

        [Display(Name = "IsAccountPage", GroupName = "PageType", Order = 100)]
        [CultureSpecific]
        public virtual bool IsAccountPage { get; set; }

        [Display(Name = "Meta Description", GroupName = "SEO", Order = 100)]
        [CultureSpecific]
        public virtual string MetaDescription { get; set; }

        [Display(Name = "Show In Breadcrumb", GroupName = "Navigation", Order = 100)]
        [CultureSpecific]
        public virtual bool ShowInBreadcrumb { get; set; }

        [Display(Name = "Last Publish Date", GroupName = "Publishing", Order = 200)]
        [CultureSpecific]
        public virtual DateTime LastPublishDate { get; set; }

        [Display(Name = "Meta Keywords", GroupName = "SEO", Order = 200)]
        [CultureSpecific]
        public virtual string MetaKeywords { get; set; }

        [Display(Name = "MetaTags", GroupName = "SEO", Order = 250)]
        [CultureSpecific]
        public virtual string MetaTags { get; set; }

        [Display(Name = "SubNav", GroupName = "Navigation", Order = 300)]
        [CultureSpecific]
        public virtual ContentArea SubNav { get; set; }

        [Display(Name = "Title Override", GroupName = "SEO", Order = 300)]
        [CultureSpecific]
        public virtual string TitleOverride { get; set; }

        [Display(Name = "H1 Tag", GroupName = "SEO", Order = 400)]
        [CultureSpecific]
        public virtual string H1Tag { get; set; }

        [Display(Name = "Canonical Url", GroupName = "SEO", Order = 500)]
        [CultureSpecific]
        public virtual string CanonicalUrl { get; set; }

    }
}
