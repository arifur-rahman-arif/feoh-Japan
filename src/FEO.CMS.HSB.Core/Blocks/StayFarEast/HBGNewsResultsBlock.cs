using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGNewsResultsBlock", GUID = "3DB162A0-B817-42E4-9803-AF884018AF0B", GroupName = "Hospitality")]
    public class HBGNewsResultsBlock : HBGBaseBlock
    {
        [Display(Name = "Page Next Button Text", GroupName = "Buttons", Order = 100)]
        [CultureSpecific]
        public virtual string PageNextButtonText { get; set; }

        [Display(Name = "Result Count", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual double ResultCount { get; set; }

        [Display(Name = "s", GroupName = "__SFE", Order = 100)]
        [CultureSpecific]
        public virtual string s { get; set; }

        [Display(Name = "Page Previous Button Text", GroupName = "Buttons", Order = 200)]
        [CultureSpecific]
        public virtual string PagePreviousButtonText { get; set; }

        [Display(Name = "Reade More Text", GroupName = "Buttons", Order = 300)]
        [CultureSpecific]
        public virtual string ReadeMoreText { get; set; }

    }
}
