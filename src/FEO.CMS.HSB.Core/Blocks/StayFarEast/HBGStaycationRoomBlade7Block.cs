using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationRoomBlade7Block", GUID = "6C31A095-26C9-4A7B-8B08-8381F9F88A91", GroupName = "Hospitality")]
    public class HBGStaycationRoomBlade7Block : HBGBaseBlock
    {
        [Display(Name = "Blade Banner", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BladeBanner { get; set; }

        [Display(Name = "Room Title", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string RoomTitle { get; set; }

        [Display(Name = "Room Description", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString RoomDescription { get; set; }

        [Display(Name = "CTA Text", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        public virtual string CTAText { get; set; }

        [Display(Name = "CTA Link", GroupName = "Content", Order = 500)]
        [CultureSpecific]
        public virtual LinkItem CTALink { get; set; }

    }
}
