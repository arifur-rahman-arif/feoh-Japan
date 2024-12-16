using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGListingResultsBlock", GUID = "E92B4182-5607-4EA0-B0E8-53F418362BD4", GroupName = "Hospitality")]
    public class HBGListingResultsBlock : HBGBaseBlock
    {
        [Display(Name = "Availability Button Text", GroupName = "Buttons", Order = 100)]
        [CultureSpecific]
        public virtual string AvailabilityButtonText { get; set; }

        [Display(Name = "Page Number text", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        public virtual string PageNumbertext { get; set; }

        [Display(Name = "Result Count", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual double ResultCount { get; set; }

        [Display(Name = "Learn More Button Text", GroupName = "Buttons", Order = 200)]
        [CultureSpecific]
        public virtual string LearnMoreButtonText { get; set; }

        [Display(Name = "Page Next Button Text", GroupName = "Buttons", Order = 300)]
        [CultureSpecific]
        public virtual string PageNextButtonText { get; set; }

        [Display(Name = "Page Previous Button Text", GroupName = "Buttons", Order = 400)]
        [CultureSpecific]
        public virtual string PagePreviousButtonText { get; set; }

    }
}
