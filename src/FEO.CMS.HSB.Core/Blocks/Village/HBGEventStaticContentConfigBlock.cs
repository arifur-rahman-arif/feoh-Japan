using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGEventStaticContentConfigBlock", GUID = "1D4A33E8-46ED-44BF-AA12-6BAAEB1B171B", GroupName = "Hospitality")]
    public class HBGEventStaticContentConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Show Button", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool ShowButton { get; set; }

        [Display(Name = "Heading Size", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual ContentReference HeadingSize { get; set; }

        [Display(Name = "Image Type", GroupName = SystemTabNames.Settings, Order = 300)]
        [CultureSpecific]
        public virtual ContentReference ImageType { get; set; }

        [Display(Name = "Enable Carousel", GroupName = SystemTabNames.Settings, Order = 400)]
        [CultureSpecific]
        public virtual bool EnableCarousel { get; set; }

    }
}
