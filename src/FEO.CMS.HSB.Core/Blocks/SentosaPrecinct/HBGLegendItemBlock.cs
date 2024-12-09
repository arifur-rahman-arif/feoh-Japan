using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGLegendItemBlock", GUID = "CFCD2DAD-5981-4D5C-A12F-91EF6CC29FBB", GroupName = "Hospitality")]
    public class HBGLegendItemBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Color", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual ContentReference Color { get; set; }

    }
}
