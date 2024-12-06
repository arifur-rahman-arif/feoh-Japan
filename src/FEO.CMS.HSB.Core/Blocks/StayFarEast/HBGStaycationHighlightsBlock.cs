using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationHighlightsBlock", GUID = "B89361D5-F74E-444C-8482-64926C215897", GroupName = "Hospitality")]
    public class HBGStaycationHighlightsBlock : HBGStaycationHighlightsConfigBlock
    {
        [Display(Name = "HighlightsTitle", GroupName = SystemTabNames.Content, Order = 25)]
        [CultureSpecific]
        public virtual string HighlightsTitle { get; set; }

        [Display(Name = "HighlightsTitleColor", GroupName = SystemTabNames.Content, Order = 50)]
        [CultureSpecific]
        public virtual string HighlightsTitleColor { get; set; }

        [Display(Name = "Left Text Copy", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString LeftTextCopy { get; set; }

        [Display(Name = "Right Text Copy", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString RightTextCopy { get; set; }

        [Display(Name = "Primary Title", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual string PrimaryTitle { get; set; }

        [Display(Name = "Address", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual string Address { get; set; }

        [Display(Name = "Contact Information", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        public virtual string ContactInformation { get; set; }

        [Display(Name = "Social Media Button1 Text", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        public virtual string SocialMediaButton1Text { get; set; }

        [Display(Name = "Social Media Button1 Link", GroupName = SystemTabNames.Content, Order = 700)]
        [CultureSpecific]
        public virtual LinkItem SocialMediaButton1Link { get; set; }

        [Display(Name = "Social Media Button2 Text", GroupName = SystemTabNames.Content, Order = 800)]
        [CultureSpecific]
        public virtual string SocialMediaButton2Text { get; set; }

        [Display(Name = "Social Media Button2 Link", GroupName = SystemTabNames.Content, Order = 900)]
        [CultureSpecific]
        public virtual LinkItem SocialMediaButton2Link { get; set; }

        [Display(Name = "HighlightsBackgroundColor", GroupName = SystemTabNames.Content, Order = 1000)]
        [CultureSpecific]
        public virtual string HighlightsBackgroundColor { get; set; }

    }
}
