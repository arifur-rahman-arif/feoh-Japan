using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGSynxisBannerBlock", GUID = "9F5AA154-BEF2-48E6-8FD4-F7614F7EEB5D", GroupName = "Hospitality")]
    public class HBGSynxisBannerBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Subtitle", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Subtitle { get; set; }

        [Display(Name = "DesktopImage", GroupName = "Content", Order = 250)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference DesktopImage { get; set; }

        [Display(Name = "TabletImage", GroupName = "Content", Order = 275)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference TabletImage { get; set; }

        [Display(Name = "MobileImage", GroupName = "Content", Order = 287)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference MobileImage { get; set; }

        [Display(Name = "Description", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Description { get; set; }

        [Display(Name = "Position", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        public virtual string Position { get; set; }

        [Display(Name = "HideDownArrow", GroupName = "Content", Order = 450)]
        [CultureSpecific]
        public virtual bool HideDownArrow { get; set; }

        [Display(Name = "PromotioBlades", GroupName = "Content", Order = 500)]
        [CultureSpecific]
        public virtual ContentArea PromotioBlades { get; set; }

    }
}
