using EPiServer.Core;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGBlogItemBlock", GUID = "4243C5C3-6BBA-4B8A-9B65-C4DDF975FFC1", GroupName = "Hospitality")]
    public class HBGBlogItemBlock : HBGRootBlock
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

        [Display(Name = "Blog Content", GroupName = "Settings", Order = 500)]
        [CultureSpecific]
        public virtual ContentReference BlogContent { get; set; }

        [Display(Name = "Blog Sidebar", GroupName = "Settings", Order = 500)]
        [CultureSpecific]
        public virtual ContentReference BlogSidebar { get; set; }

        [Display(Name = "Blog Nav", GroupName = "Settings", Order = 500)]
        [CultureSpecific]
        public virtual ContentReference BlogNav { get; set; }

    }
}
