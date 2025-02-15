using EPiServer.Core;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStickyPromotionalFeatureBlock", GUID = "7717F049-63E8-4044-89AC-B1E254AE11CF", GroupName = "Hospitality")]
    public class HBGStickyPromotionalFeatureBlock : HBGCTAGeneralBlock
    {
        [Display(Name = "Position Of Sticky", GroupName = "Popup Settings", Order = 50)]
        [CultureSpecific]
        public virtual ContentReference PositionOfSticky { get; set; }

        [Display(Name = "Display Behaviour Popup", GroupName = "Popup Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference DisplayBehaviourPopup { get; set; }

        [Display(Name = "Time Visibility Popup", GroupName = "Popup Settings", Order = 200)]
        [CultureSpecific]
        public virtual double TimeVisibilityPopup { get; set; }

        [Display(Name = "Time Invisibility Popup", GroupName = "Popup Settings", Order = 250)]
        [CultureSpecific]
        public virtual double TimeInvisibilityPopup { get; set; }

        [Display(Name = "Background Color Popup", GroupName = "Popup Settings", Order = 300)]
        [CultureSpecific]
        public virtual ContentReference BackgroundColorPopup { get; set; }

        [Display(Name = "Sticky CTA Title", GroupName = "Sticky Settings", Order = 350)]
        [CultureSpecific]
        public virtual string StickyCTATitle { get; set; }

        [Display(Name = "Sticky CTA Color", GroupName = "Sticky Settings", Order = 400)]
        [CultureSpecific]
        public virtual ContentReference StickyCTAColor { get; set; }

    }
}
