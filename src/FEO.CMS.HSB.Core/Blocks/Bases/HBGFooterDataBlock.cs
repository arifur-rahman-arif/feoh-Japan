using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGFooterDataBlock", GUID = "12F5B7E5-7F71-478A-806A-772D9089877A", GroupName = "Hospitality")]
    public class HBGFooterDataBlock : HBGBaseBlock
    {
        [Display(Name = "FEH Logo Image", GroupName = "Logos and CTAs", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference FEHLogoImage { get; set; }

        [Display(Name = "FEH Logo Desc", GroupName = "Logos and CTAs", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString FEHLogoDesc { get; set; }

        [Display(Name = "Insiders Logo Image", GroupName = "Logos and CTAs", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference InsidersLogoImage { get; set; }

        [Display(Name = "Insiders Logo Desc", GroupName = "Logos and CTAs", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString InsidersLogoDesc { get; set; }

        [Display(Name = "Insiders CTA Link", GroupName = "Logos and CTAs", Order = 500)]
        [CultureSpecific]
        public virtual LinkItem InsidersCTALink { get; set; }

        [Display(Name = "BD Desc", GroupName = "Logos and CTAs", Order = 650)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString BDDesc { get; set; }

        [Display(Name = "BD CTA Link", GroupName = "Logos and CTAs", Order = 700)]
        [CultureSpecific]
        public virtual LinkItem BDCTALink { get; set; }

        [Display(Name = "Display CTA Portions", GroupName = "Logos and CTAs", Order = 800)]
        [CultureSpecific]
        public virtual bool DisplayCTAPortions { get; set; }

    }
}
