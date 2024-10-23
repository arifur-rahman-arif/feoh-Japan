using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGAmenityBlock", GUID = "E10A0F58-D941-419C-BB0A-CA2E9AFAD5C9", GroupName = "Hospitality")]
    public class HBGAmenityBlock : HBGBaseBlock
    {
        [Display(Name = "Icon", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Icon { get; set; }

        [Display(Name = "Thumbnail", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Thumbnail { get; set; }

        [Display(Name = "Pillar", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string Pillar { get; set; }

        [Display(Name = "Operating Hour", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString OperatingHour { get; set; }

        [Display(Name = "Location", GroupName = SystemTabNames.Content, Order = 450)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Location { get; set; }

        [Display(Name = "Phone Number", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString PhoneNumber { get; set; }

        [Display(Name = "Website Link", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        public virtual LinkItem WebsiteLink { get; set; }

        [Display(Name = "SeeAll", GroupName = SystemTabNames.Content, Order = 800)]
        [CultureSpecific]
        public virtual LinkItem SeeAll { get; set; }

    }
}
