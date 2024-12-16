using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGArticleResultsBlock", GUID = "64FAA04E-6656-4323-A49E-C3F2853FFDE2", GroupName = "Hospitality")]
    public class HBGArticleResultsBlock : HBGBaseBlock
    {
        [Display(Name = "Page Next Button Text", GroupName = "Buttons", Order = 100)]
        [CultureSpecific]
        public virtual string PageNextButtonText { get; set; }

        [Display(Name = "Result Count", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual double ResultCount { get; set; }

        [Display(Name = "Page Previous Button Text", GroupName = "Buttons", Order = 200)]
        [CultureSpecific]
        public virtual string PagePreviousButtonText { get; set; }

    }
}
