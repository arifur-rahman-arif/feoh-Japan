using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.SentosaPrecinct;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGFeaturedBlogsBlock", GUID = "ACFB9675-1F55-4CF0-8844-2ECA90F1EA38", GroupName = "Hospitality")]
    public class HBGFeaturedBlogsBlock : HBGFeaturedBlogConfigBlock
    {
        [Display(Name = "Title", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Featured Articles", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual ContentArea FeaturedArticles { get; set; }

    }
}
