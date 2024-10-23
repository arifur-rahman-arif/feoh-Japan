using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGNewsListingCarouselItemBlock", GUID = "917A2138-3D39-4952-93D2-EF749857A912", GroupName = "Hospitality")]
    public class HBGNewsListingCarouselItemBlock : HBGBaseBlock
    {
        [Display(Name = "Image", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Image { get; set; }

        [Display(Name = "Label", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual ContentReference Label { get; set; }

        [Display(Name = "Description", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Description { get; set; }

        [Display(Name = "Publish Date", GroupName = SystemTabNames.Content, Order = 550)]
        [CultureSpecific]
        public virtual DateTime PublishDate { get; set; }

        [Display(Name = "Location", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        public virtual ContentReference Location { get; set; }

        [Display(Name = "CTA Link", GroupName = SystemTabNames.Content, Order = 700)]
        [CultureSpecific]
        public virtual LinkItem CTALink { get; set; }

    }
}
