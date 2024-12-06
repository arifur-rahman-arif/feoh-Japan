using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGFeaturedBlogConfigBlock", GUID = "47679401-9E96-41F7-B544-F76C4EF898FE", GroupName = "Hospitality")]
    public class HBGFeaturedBlogConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Item Size", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual string ItemSize { get; set; }

        [Display(Name = "Featured Blog", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual ContentReference FeaturedBlog { get; set; }

    }
}
