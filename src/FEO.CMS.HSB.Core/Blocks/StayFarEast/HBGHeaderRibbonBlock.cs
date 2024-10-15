using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGHeaderRibbonBlock", GUID = "968E8625-57A0-428D-90FC-0556C75954C0", GroupName = "Hospitality")]
    public class HBGHeaderRibbonBlock : HBGBaseBlock
    {
        [Display(Name = "RibbonPromo", GroupName = "Ribbon", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString RibbonPromo { get; set; }

        [Display(Name = "LearnMore", GroupName = "Ribbon", Order = 200)]
        [CultureSpecific]
        public virtual string LearnMore { get; set; }

        [Display(Name = "RibbonPromoMobile", GroupName = "Ribbon", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString RibbonPromoMobile { get; set; }

        [Display(Name = "RibbonInnerPromo", GroupName = "Ribbon", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString RibbonInnerPromo { get; set; }

        [Display(Name = "RibbonInnerContent", GroupName = "Ribbon", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString RibbonInnerContent { get; set; }

        [Display(Name = "RibbonSignUpLink", GroupName = "Ribbon", Order = 600)]
        [CultureSpecific]
        public virtual LinkItem RibbonSignUpLink { get; set; }

        [Display(Name = "RibbonSignUpText", GroupName = "Ribbon", Order = 700)]
        [CultureSpecific]
        public virtual string RibbonSignUpText { get; set; }

        [Display(Name = "RibbonLogoImage", GroupName = "Ribbon", Order = 800)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference RibbonLogoImage { get; set; }

        [Display(Name = "RibbonLogoUrl", GroupName = "Ribbon", Order = 900)]
        [CultureSpecific]
        public virtual LinkItem RibbonLogoUrl { get; set; }

        [Display(Name = "HideHeaderRibbon", GroupName = "Ribbon", Order = 1000)]
        [CultureSpecific]
        public virtual bool HideHeaderRibbon { get; set; }

    }
}
