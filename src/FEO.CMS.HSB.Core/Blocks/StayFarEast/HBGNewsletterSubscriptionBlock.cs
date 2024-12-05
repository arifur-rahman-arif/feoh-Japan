using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGNewsletterSubscriptionBlock", GUID = "9D3630F4-DB04-4642-A519-9B994A8891F8", GroupName = "Hospitality")]
    public class HBGNewsletterSubscriptionBlock : HBGRootBlock
    {
        [Display(Name = "Background", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Background { get; set; }

        [Display(Name = "Form Parameters", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        public virtual string FormParameters { get; set; }

        [Display(Name = "Background For Mobile", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BackgroundForMobile { get; set; }

        [Display(Name = "Form URL", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        public virtual LinkItem FormURL { get; set; }

        [Display(Name = "Highlight Text", GroupName = "Images", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString HighlightText { get; set; }

        [Display(Name = "Return URL", GroupName = "Images", Order = 400)]
        [CultureSpecific]
        public virtual LinkItem ReturnURL { get; set; }

    }
}
