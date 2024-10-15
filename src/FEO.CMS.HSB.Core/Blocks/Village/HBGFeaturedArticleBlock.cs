using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGFeaturedArticleBlock", GUID = "910D71DF-94B6-42EF-A212-ED53326AD1E9", GroupName = "Hospitality")]
    public class HBGFeaturedArticleBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = "Info", Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Description", GroupName = "Info", Order = 200)]
        [CultureSpecific]
        public virtual string Description { get; set; }

        [Display(Name = "IsFeatured", GroupName = "Info", Order = 300)]
        [CultureSpecific]
        public virtual bool IsFeatured { get; set; }

    }
}
