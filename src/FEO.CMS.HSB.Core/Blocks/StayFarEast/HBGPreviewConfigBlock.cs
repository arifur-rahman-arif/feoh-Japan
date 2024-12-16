using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGPreviewConfigBlock", GUID = "717C6224-CEC9-45E5-A4CC-F2441C1D5A21", GroupName = "Hospitality")]
    public class HBGPreviewConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Action Button Color", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference ActionButtonColor { get; set; }

        [Display(Name = "Action Button Text", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual string ActionButtonText { get; set; }

        [Display(Name = "Divider Color", GroupName = SystemTabNames.Settings, Order = 300)]
        [CultureSpecific]
        public virtual ContentReference DividerColor { get; set; }

        [Display(Name = "Learn More Text Color", GroupName = SystemTabNames.Settings, Order = 400)]
        [CultureSpecific]
        public virtual ContentReference LearnMoreTextColor { get; set; }

        [Display(Name = "Show Action Button", GroupName = SystemTabNames.Settings, Order = 500)]
        [CultureSpecific]
        public virtual bool ShowActionButton { get; set; }

        [Display(Name = "Show Learn More", GroupName = SystemTabNames.Settings, Order = 600)]
        [CultureSpecific]
        public virtual bool ShowLearnMore { get; set; }

        [Display(Name = "Show Sub Title", GroupName = SystemTabNames.Settings, Order = 700)]
        [CultureSpecific]
        public virtual bool ShowSubTitle { get; set; }

        [Display(Name = "Show Title", GroupName = SystemTabNames.Settings, Order = 800)]
        [CultureSpecific]
        public virtual bool ShowTitle { get; set; }

        [Display(Name = "Show Item URL", GroupName = SystemTabNames.Settings, Order = 900)]
        [CultureSpecific]
        public virtual bool ShowItemURL { get; set; }

    }
}
