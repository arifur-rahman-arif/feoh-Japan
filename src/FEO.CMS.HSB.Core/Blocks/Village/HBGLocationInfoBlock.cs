using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGLocationInfoBlock", GUID = "6C3219F2-96C0-4337-BF16-67FB148FC6D7", GroupName = "Hospitality")]
    public class HBGLocationInfoBlock : HBGBaseBlock
    {
        [Display(Name = "Nearby Title", GroupName = "Nearby", Order = 100)]
        [CultureSpecific]
        public virtual string NearbyTitle { get; set; }

        [Display(Name = "Page title", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        public virtual string Pagetitle { get; set; }

        [Display(Name = "Title", GroupName = "Nearby Promo", Order = 100)]
        [CultureSpecific]
        public virtual string PromoTitle { get; set; }

        [Display(Name = "Title", GroupName = "How to get there", Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Description", GroupName = "How to get there", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Description { get; set; }

        [Display(Name = "Hide Widget CTA", GroupName = "Basic Info", Order = 200)]
        [CultureSpecific]
        public virtual bool HideWidgetCTA { get; set; }

        [Display(Name = "Nearby items", GroupName = "Nearby", Order = 200)]
        [CultureSpecific]
        public virtual ContentArea Nearbyitems { get; set; }

        [Display(Name = "Promo Description", GroupName = "Nearby Promo", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString PromoDescription { get; set; }

        [Display(Name = "Image", GroupName = "Nearby Promo", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Image { get; set; }

        [Display(Name = "Link", GroupName = "Nearby Promo", Order = 400)]
        [CultureSpecific]
        public virtual LinkItem Link { get; set; }

    }
}
