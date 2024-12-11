using EPiServer;
using EPiServer.Core;
using EPiServer.Core.Internal;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGBlogOverviewBlock", GUID = "6C514367-12AC-4531-A4C9-6C86B008758A", GroupName = "Hospitality")]
    public class HBGBlogOverviewBlock : HBGThumbnailPreviewBlock
    {
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

        private readonly IContentLoader _contentLoader;

        public HBGBlogOverviewBlock()
        {

        }

        public HBGBlogOverviewBlock(IContentLoader contentLoader)
        {
            _contentLoader = contentLoader;
        }
        public IEnumerable<string> GetFullTags()  
        {
            List<string> tags = new List<string>();
            if (Season != null && Season.Items.Any())
            {
                List<HBGNameValuePairBlock> SeasonItems = new List<HBGNameValuePairBlock>() ;
                foreach (var item in Season.Items)
                {
                    SeasonItems.Add(_contentLoader.Get<HBGNameValuePairBlock>(item.ContentLink));
                }
                
                tags.AddRange(SeasonItems.Select(x=>x.Value));
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
