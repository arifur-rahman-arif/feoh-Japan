using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationMastHeadBlock", GUID = "13BFDBA2-1ADF-40F6-BECE-CF67BB646028", GroupName = "Hospitality")]
    public class HBGStaycationMastHeadBlock : HBGStaycationMastHeadConfigBlock
    {
        [Display(Name = "HeroText", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString HeroText { get; set; }

        [Display(Name = "HeroBanner", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference HeroBanner { get; set; }

        [Display(Name = "BannerPrimaryText", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual string BannerPrimaryText { get; set; }

        [Display(Name = "BannerSecondaryText", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual string BannerSecondaryText { get; set; }

        [Display(Name = "PrimaryTitle", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        public virtual string PrimaryTitle { get; set; }

        [Display(Name = "Address", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        public virtual string Address { get; set; }

        [Display(Name = "ContactInformation", GroupName = SystemTabNames.Content, Order = 700)]
        [CultureSpecific]
        public virtual string ContactInformation { get; set; }

        [Display(Name = "SocialMediaButton1Text", GroupName = SystemTabNames.Content, Order = 800)]
        [CultureSpecific]
        public virtual string SocialMediaButton1Text { get; set; }

        [Display(Name = "SocialMediaButton1Link", GroupName = SystemTabNames.Content, Order = 900)]
        [CultureSpecific]
        public virtual string SocialMediaButton1Link { get; set; }

        [Display(Name = "SocialMediaButton2Text", GroupName = SystemTabNames.Content, Order = 1000)]
        [CultureSpecific]
        public virtual string SocialMediaButton2Text { get; set; }

        [Display(Name = "SocialMediaButton2Link", GroupName = SystemTabNames.Content, Order = 1100)]
        [CultureSpecific]
        public virtual string SocialMediaButton2Link { get; set; }

    }
}
