using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGSocialMediaBlock", GUID = "212880A4-E7AD-4F99-B8E8-58B684BC0D25", GroupName = "Hospitality")]
    public class HBGSocialMediaBlock : HBGBaseBlock
    {
        [Display(Name = "Social Icon 1", GroupName = "Social Media", Order = 1100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference SocialIcon1 { get; set; }

        [Display(Name = "Social Link 1", GroupName = "Social Media", Order = 1200)]
        [CultureSpecific]
        public virtual LinkItem SocialLink1 { get; set; }

        [Display(Name = "Social Icon 2", GroupName = "Social Media", Order = 1300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference SocialIcon2 { get; set; }

        [Display(Name = "Social Link 2", GroupName = "Social Media", Order = 1400)]
        [CultureSpecific]
        public virtual LinkItem SocialLink2 { get; set; }

        [Display(Name = "Social Icon 3", GroupName = "Social Media", Order = 1500)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference SocialIcon3 { get; set; }

        [Display(Name = "Social Link 3", GroupName = "Social Media", Order = 1600)]
        [CultureSpecific]
        public virtual LinkItem SocialLink3 { get; set; }

    }
}
