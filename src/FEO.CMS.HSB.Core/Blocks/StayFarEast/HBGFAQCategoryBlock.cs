using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGFAQCategoryBlock", GUID = "55173BF6-978F-4D82-8334-B2382A6228C4", GroupName = "Hospitality")]
    public class HBGFAQCategoryBlock : HBGBaseBlock
    {
        [Display(Name = "Category Title", GroupName = "Contents", Order = 0)]
        [CultureSpecific]
        public virtual string CategoryTitle { get; set; }

        [Display(Name = "FAQ Items", GroupName = "Contents", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea FAQItems { get; set; }

    }
}
