using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationDealsBlock", GUID = "2ECAAE1B-ABAC-4469-AF8D-66939A090D5A", GroupName = "Hospitality")]
    public class HBGStaycationDealsBlock : HBGBaseBlock
    {
        [Display(Name = "Featured Deals", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea FeaturedDeals { get; set; }

        [Display(Name = "Layout Options", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual ContentArea LayoutOptions { get; set; }

        [Display(Name = "Default Layout", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        public virtual ContentReference DefaultLayout { get; set; }

        [Display(Name = "Deals", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        public virtual ContentArea Deals { get; set; }

        [Display(Name = "BladeID", GroupName = "Content", Order = 500)]
        [CultureSpecific]
        public virtual string BladeID { get; set; }

    }
}
