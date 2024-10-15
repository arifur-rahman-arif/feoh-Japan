using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationHotelBlock", GUID = "0655CA84-B8AF-416F-8EBB-6539F4467C95", GroupName = "Hospitality")]
    public class HBGStaycationHotelBlock : HBGBaseBlock
    {
        [Display(Name = "Blade Banner", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BladeBanner { get; set; }

        [Display(Name = "HotelTitle", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string HotelTitle { get; set; }

        [Display(Name = "Hotel Description", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString HotelDescription { get; set; }

        [Display(Name = "Hotel Blurb", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        public virtual string HotelBlurb { get; set; }

        [Display(Name = "Blade Icon", GroupName = "Content", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BladeIcon { get; set; }

        [Display(Name = "Blade Title", GroupName = "Content", Order = 600)]
        [CultureSpecific]
        public virtual string BladeTitle { get; set; }

        [Display(Name = "BladeID", GroupName = "Content", Order = 700)]
        [CultureSpecific]
        public virtual string BladeID { get; set; }

    }
}
