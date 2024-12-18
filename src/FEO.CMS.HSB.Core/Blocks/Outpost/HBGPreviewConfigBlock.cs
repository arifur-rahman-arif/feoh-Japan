using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGPreviewConfigBlock", GUID = "7E78785D-0666-4953-81AB-B9CC5DC1B05A", GroupName = "Hospitality")]
    public class HBGPreviewConfigBlock : HBGBaseBlock
    {
        [Display(Name = "CTA Color", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference CTAColor { get; set; }

        [Display(Name = "Learn More Text", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual string LearnMoreText { get; set; }

        [Display(Name = "Learn More Text Color", GroupName = SystemTabNames.Settings, Order = 400)]
        [CultureSpecific]
        public virtual ContentReference LearnMoreTextColor { get; set; }

        [Display(Name = "Page Size", GroupName = SystemTabNames.Settings, Order = 1100)]
        [CultureSpecific]
        public virtual string PageSize { get; set; }

    }
}
