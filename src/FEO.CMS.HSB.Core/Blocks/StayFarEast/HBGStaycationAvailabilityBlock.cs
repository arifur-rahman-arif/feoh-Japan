using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationAvailabilityBlock", GUID = "E07E0B88-8904-4E95-8711-61E50399C258", GroupName = "Hospitality")]
    public class HBGStaycationAvailabilityBlock : HBGBaseBlock
    {
        [Display(Name = "Closing Title", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string ClosingTitle { get; set; }

        [Display(Name = "CTA Text", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string CTAText { get; set; }

        [Display(Name = "CTA Link", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual LinkItem CTALink { get; set; }

        [Display(Name = "Mobile CTA Link", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual LinkItem MobileCTALink { get; set; }

    }
}
