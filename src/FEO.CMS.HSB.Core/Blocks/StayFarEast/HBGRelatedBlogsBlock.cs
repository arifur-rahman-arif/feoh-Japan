using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGRelatedBlogsBlock", GUID = "1188AB66-19C8-4FC5-B366-2EDE644D9810", GroupName = "Hospitality")]
    public class HBGRelatedBlogsBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Related Articles", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual ContentArea RelatedArticles { get; set; }

    }
}
