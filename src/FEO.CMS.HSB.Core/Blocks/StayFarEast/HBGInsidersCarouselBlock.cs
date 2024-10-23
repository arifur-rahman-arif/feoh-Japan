using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGInsidersCarouselBlock", GUID = "E0B719C2-37AA-47CB-90A1-1761E291D2BC", GroupName = "Hospitality")]
    public class HBGInsidersCarouselBlock : HBGBaseBlock
    {
        [Display(Name = "Image", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Image { get; set; }

        [Display(Name = "Image Title", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string ImageTitle { get; set; }

        [Display(Name = "Image Subtitle", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual string ImageSubtitle { get; set; }

        [Display(Name = "Title", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Subtitle", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        public virtual string Subtitle { get; set; }

        [Display(Name = "Description", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Description { get; set; }

        [Display(Name = "Read More", GroupName = SystemTabNames.Content, Order = 700)]
        [CultureSpecific]
        public virtual LinkItem ReadMore { get; set; }

    }
}
