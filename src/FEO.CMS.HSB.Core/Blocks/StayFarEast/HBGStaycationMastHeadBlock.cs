using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationMastHeadBlock", GUID = "13BFDBA2-1ADF-40F6-BECE-CF67BB646028", GroupName = "Hospitality")]
    public class HBGStaycationMastHeadBlock : HBGBaseBlock
    {
        [Display(Name = "HeroText", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString HeroText { get; set; }

        [Display(Name = "HeroBanner", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference HeroBanner { get; set; }

        [Display(Name = "BannerPrimaryText", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        public virtual string BannerPrimaryText { get; set; }

        [Display(Name = "BannerSecondaryText", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        public virtual string BannerSecondaryText { get; set; }

        [Display(Name = "PrimaryTitle", GroupName = "Content", Order = 500)]
        [CultureSpecific]
        public virtual string PrimaryTitle { get; set; }

        [Display(Name = "Address", GroupName = "Content", Order = 600)]
        [CultureSpecific]
        public virtual string Address { get; set; }

        [Display(Name = "ContactInformation", GroupName = "Content", Order = 700)]
        [CultureSpecific]
        public virtual string ContactInformation { get; set; }

        [Display(Name = "SocialMediaButton1Text", GroupName = "Content", Order = 800)]
        [CultureSpecific]
        public virtual string SocialMediaButton1Text { get; set; }

        [Display(Name = "SocialMediaButton1Link", GroupName = "Content", Order = 900)]
        [CultureSpecific]
        public virtual string SocialMediaButton1Link { get; set; }

        [Display(Name = "SocialMediaButton2Text", GroupName = "Content", Order = 1000)]
        [CultureSpecific]
        public virtual string SocialMediaButton2Text { get; set; }

        [Display(Name = "SocialMediaButton2Link", GroupName = "Content", Order = 1100)]
        [CultureSpecific]
        public virtual string SocialMediaButton2Link { get; set; }

    }
}
