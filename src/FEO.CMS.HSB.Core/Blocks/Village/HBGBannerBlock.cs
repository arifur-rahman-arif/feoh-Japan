using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using FEO.CMS.HBG.Core.Blocks.Clan;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGBannerBlock", GUID = "04B40A42-647B-4132-9F37-4F3BED06E740", GroupName = "Hospitality")]
    public class HBGBannerBlock : HBGBackgroundVideoBlock
    {
        [Display(Name = "Description", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Description { get; set; }

        [Display(Name = "Poster", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Poster { get; set; }

        [Display(Name = "Pull out text", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string Pullouttext { get; set; }

        [Display(Name = "Poster For Tablet", GroupName = "Images", Order = 150)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference PosterForTablet { get; set; }

        [Display(Name = "Poster For Mobile", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference PosterForMobile { get; set; }

        [Display(Name = "Pull out text description", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Pullouttextdescription { get; set; }

        [Display(Name = "Summary", GroupName = "Basic Info", Order = 200)]
        [CultureSpecific]
        public virtual string Summary { get; set; }

        [Display(Name = "Link to Subscription page", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual LinkItem LinktoSubscriptionpage { get; set; }

        [Display(Name = "Title", GroupName = "Basic Info", Order = 300)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Sub Title", GroupName = "Basic Info", Order = 400)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

    }
}
