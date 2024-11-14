using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGBlogDetailPage", GUID = "320F5FD6-7A51-4401-86BE-A00561001051", GroupName = "Hospitality")]
    public class HBGBlogDetailPage : HBGBasePage
    {
        [Display(Name = "Offset Instruction", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual string OffsetInstruction { get; set; }

        [Display(Name = "Thumbnail To Use", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual ContentReference ThumbnailToUse { get; set; }
        [Display(Name = "Author", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        public virtual string Author { get; set; }

        [Display(Name = "Location", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Location { get; set; }

        [Display(Name = "Season", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual ContentArea Season { get; set; }

        [Display(Name = "Type", GroupName = "Settings", Order = 300)]
        [CultureSpecific]
        public virtual ContentArea Type { get; set; }

        [Display(Name = "Purpose", GroupName = "Settings", Order = 400)]
        [CultureSpecific]
        public virtual ContentArea Purpose { get; set; }

        [Display(Name = "Featured Tags", GroupName = "Settings", Order = 500)]
        [CultureSpecific]
        public virtual string FeaturedTags { get; set; }

        [Display(Name = "Category", GroupName = "Profile", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Category { get; set; }

        [Display(Name = "Article Category Name", GroupName = "Profile", Order = 200)]
        [CultureSpecific]
        public virtual string ArticleCategoryName { get; set; }

        [Display(Name = "SearchIndexLocation", GroupName = SystemTabNames.Settings, Order = 10000)]
        [CultureSpecific]
        [Editable(false)]
        public virtual IEnumerable<string> SearchIndexLocation { get; set; }

        [Display(Name = "SearchIndexSeason", GroupName = SystemTabNames.Settings, Order = 10001)]
        [CultureSpecific]
        [Editable(false)]
        public virtual IEnumerable<string> SearchIndexSeason { get; set; }

        [Display(Name = "SearchIndexType", GroupName = SystemTabNames.Settings, Order = 10002)]
        [CultureSpecific]
        [Editable(false)]
        public virtual IEnumerable<string> SearchIndexType { get; set; }

        [Display(Name = "SearchIndexPurpose", GroupName = SystemTabNames.Settings, Order = 10003)]
        [CultureSpecific]
        [Editable(false)]
        public virtual IEnumerable<string> SearchIndexPurpose { get; set; }
    }
}
