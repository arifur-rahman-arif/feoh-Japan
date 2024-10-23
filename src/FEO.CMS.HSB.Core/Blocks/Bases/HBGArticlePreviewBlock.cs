using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGArticlePreviewBlock", GUID = "7F1F9A99-0F3D-4234-8802-1FF5F1B3CF86", GroupName = "Hospitality")]
    public class HBGArticlePreviewBlock : HBGThumbnailPreviewBlock
    {
        [Display(Name = "Category", GroupName = "Profile", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Category { get; set; }

        [Display(Name = "Article Category Name", GroupName = "Profile", Order = 200)]
        [CultureSpecific]
        public virtual string ArticleCategoryName { get; set; }

    }
}
