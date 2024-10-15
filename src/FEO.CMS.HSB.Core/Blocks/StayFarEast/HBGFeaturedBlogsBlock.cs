using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGFeaturedBlogsBlock", GUID = "ACFB9675-1F55-4CF0-8844-2ECA90F1EA38", GroupName = "Hospitality")]
    public class HBGFeaturedBlogsBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Featured Articles", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual ContentArea FeaturedArticles { get; set; }

    }
}
