using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Pages.StayFarEast;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGArticleThumbnailBlock", GroupName = "Hospitality")]
    public class HBGArticleThumbnailBlock : HBGBaseBlock
    {
        [Display(Name = "Article Thumbnails", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [AllowedTypes(AllowedTypes = new[] { typeof(HBGBlogDetailPage) })]
        public virtual ContentArea ArticleThumbnails { get; set; }
    }
}
