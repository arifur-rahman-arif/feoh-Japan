using EPiServer;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGBlogDetailPage", GUID = "320F5FD6-7A51-4401-86BE-A00561001051", GroupName = "Hospitality")]
    public class HBGBlogDetailPage : HBGBasePage
    {
        [Display(Name = "Offset Instruction", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual string OffsetInstruction { get; set; }

        [Display(Name = "Thumbnail To Use", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual ContentReference ThumbnailToUse { get; set; }
        [Display(Name = "Author", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        public virtual string Author { get; set; }

        [Display(Name = "Location", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Location { get; set; }

        [Display(Name = "Season", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual ContentArea Season { get; set; }

        [Display(Name = "Type", GroupName = SystemTabNames.Settings, Order = 300)]
        [CultureSpecific]
        public virtual ContentArea Type { get; set; }

        [Display(Name = "Purpose", GroupName = SystemTabNames.Settings, Order = 400)]
        [CultureSpecific]
        public virtual ContentArea Purpose { get; set; }

        [Display(Name = "Featured Tags", GroupName = SystemTabNames.Settings, Order = 500)]
        [CultureSpecific]
        public virtual string FeaturedTags { get; set; }

        [Display(Name = "Category", GroupName = "Profile", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Categories { get; set; }

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

        [Display(Name = "Blog Content", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea BlogContent { get; set; }

        [Display(Name = "Blog Sidebar", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual ContentArea BlogSidebar { get; set; }

        [Display(Name = "Blog Nav", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual ContentArea BlogNav { get; set; }

        private readonly IContentLoader _contentLoader;
        public HBGBlogDetailPage()
        {

        }
        public HBGBlogDetailPage(IContentLoader contentLoader)
        {
            _contentLoader = contentLoader;
        }
        public IEnumerable<string> GetFullTags()
        {
            List<string> tags = new List<string>();
            if (Season != null && Season.Items.Any())
            {
                List<HBGNameValuePairBlock> SeasonItems = new List<HBGNameValuePairBlock>();
                foreach (var item in Season.Items)
                {
                    SeasonItems.Add(_contentLoader.Get<HBGNameValuePairBlock>(item.ContentLink));
                }

                tags.AddRange(SeasonItems.Select(x => x.Value));
            }
            if (Location != null && Location.Items.Any())
            {
                List<HBGCountryBlock> LocationItems = new List<HBGCountryBlock>();
                foreach (var item in Location.Items)
                {
                    LocationItems.Add(_contentLoader.Get<HBGCountryBlock>(item.ContentLink));
                }
                tags.AddRange(LocationItems.Select(x => x.Title));
            }
            if (Type != null && Type.Items.Any())
            {
                List<HBGNameValuePairBlock> TypeItems = new List<HBGNameValuePairBlock>();
                foreach (var item in Season.Items)
                {
                    TypeItems.Add(_contentLoader.Get<HBGNameValuePairBlock>(item.ContentLink));
                }
                tags.AddRange(TypeItems.Select(x => x.Value));

            }
            if (Purpose != null && Purpose.Items.Any())
            {
                List<HBGNameValuePairBlock> PurposeItems = new List<HBGNameValuePairBlock>();
                foreach (var item in Purpose.Items)
                {
                    PurposeItems.Add(_contentLoader.Get<HBGNameValuePairBlock>(item.ContentLink));
                }
                tags.AddRange(PurposeItems.Select(x => x.Value));
            }
            return tags.ToArray();
        }
    }
}
