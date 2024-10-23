using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages
{
    [ContentType(DisplayName = "HospitalityBasePage", GUID = "3697F7C1-CDB1-48F4-A84B-ABBF92013863", GroupName = "Hospitality")]
    public class HBGBasePage : PageData
    {
        [Display(Name = "Styles", GroupName = "Styling", Order = 0)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual string Styles { get; set; }

        [Display(Name = "Body Css Class", GroupName = "Styling", Order = 0)]
        [CultureSpecific]
        public virtual string BodyCssClass { get; set; }

        [Display(Name = "HeaderScripts", GroupName = "General", Order = 203)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString HeaderScripts { get; set; }

        [Display(Name = "FooterScripts", GroupName = "General", Order = 303)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString FooterScripts { get; set; }

        [Display(GroupName = SystemTabNames.Content, Name = "Main Content Area", Description = "main", Order = 100)]
        public virtual ContentArea MainContentArea { get; set; }

        [Display(GroupName = SystemTabNames.Content, Name = "Header", Description = "head", Order = 100)]
        public virtual ContentArea Header { get; set; }

        [Display(GroupName = SystemTabNames.Content, Name = "Body Top", Description = "body-top", Order = 100)]
        public virtual ContentArea BodyTop { get; set; }

        [Display(GroupName = SystemTabNames.Content, Name = "Body Bottom", Description = "body-bottom", Order = 100)]
        public virtual ContentArea BodyBottom { get; set; }

        [Display(GroupName = SystemTabNames.Content, Name = "Footer", Description = "Footer", Order = 100)]
        public virtual ContentArea Footer { get; set; }
        public bool HideHeader { get; set; }
        public bool HideFooter { get; set; }
        public bool HideBreadcrumb { get; set; }

        //HBGViewBlock
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

        //HBGThumbnailPreviewBlock
        [Display(Name = "Alternate URL", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem AlternateURL { get; set; }

        [Display(Name = "Large Thumbnail", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LargeThumbnail { get; set; }

        [Display(Name = "Sub Title", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

        [Display(Name = "Medium Thumbnail", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference MediumThumbnail { get; set; }

        [Display(Name = "Small Thumbnail", GroupName = "Images", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference SmallThumbnail { get; set; }

        //HBGRootBlock
        [Display(Name = "Description", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Description { get; set; }

        [Display(Name = "Summary", GroupName = "Basic Info", Order = 200)]
        [CultureSpecific]
        public virtual string Summary { get; set; }

        [Display(Name = "Title", GroupName = "Basic Info", Order = 300)]
        [CultureSpecific]
        public virtual string Title { get; set; }

    }
}
