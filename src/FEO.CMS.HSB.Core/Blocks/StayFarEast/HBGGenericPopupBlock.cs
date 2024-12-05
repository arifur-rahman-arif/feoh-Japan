using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGGenericPopupBlock", GUID = "FDD4EADD-BE3E-4606-8595-2F5432F36BD2", GroupName = "Hospitality")]
    public class HBGGenericPopupBlock : HBGGenericPopupRenderingBlock
    {
        [Display(Name = "Background Color", GroupName = "Enhancement Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference BackgroundColor { get; set; }

        [Display(Name = "ExitIntent", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual bool ExitIntent { get; set; }

        [Display(Name = "CTA Text URL", GroupName = "Enhancement Content", Order = 200)]
        [CultureSpecific]
        public virtual LinkItem CTATextURL { get; set; }

        [Display(Name = "Enable", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual bool Enable { get; set; }

        [Display(Name = "CTA Background Color", GroupName = "Enhancement Content", Order = 300)]
        [CultureSpecific]
        public virtual ContentReference CTABackgroundColor { get; set; }

        [Display(Name = "CTA Text Fore Color", GroupName = "Enhancement Content", Order = 400)]
        [CultureSpecific]
        public virtual ContentReference CTATextForeColor { get; set; }

        [Display(Name = "Popup Time Visibility", GroupName = "Enhancement Content", Order = 500)]
        [CultureSpecific]
        public virtual string PopupTimeVisibility { get; set; }

        [Display(Name = "Popup Time Delay", GroupName = "Enhancement Content", Order = 550)]
        [CultureSpecific]
        public virtual string PopupTimeDelay { get; set; }

        [Display(Name = "Popup Time On Page", GroupName = "Enhancement Content", Order = 600)]
        [CultureSpecific]
        public virtual string PopupTimeOnPage { get; set; }

    }
}
