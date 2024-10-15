using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationRoomChoicesBlock", GUID = "2EEF2C14-E01B-4A86-A1D8-59E5E9931B93", GroupName = "Hospitality")]
    public class HBGStaycationRoomChoicesBlock : HBGBaseBlock
    {
        [Display(Name = "Blade Icon", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BladeIcon { get; set; }

        [Display(Name = "Blade Title", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        public virtual string BladeTitle { get; set; }

        [Display(Name = "Layout Options", GroupName = "Content", Order = 500)]
        [CultureSpecific]
        public virtual ContentArea LayoutOptions { get; set; }

        [Display(Name = "Default Layout", GroupName = "Content", Order = 600)]
        [CultureSpecific]
        public virtual ContentReference DefaultLayout { get; set; }

        [Display(Name = "BladeID", GroupName = "Content", Order = 700)]
        [CultureSpecific]
        public virtual string BladeID { get; set; }

        [Display(Name = "All Rooms Link", GroupName = "Content", Order = 800)]
        [CultureSpecific]
        public virtual LinkItem AllRoomsLink { get; set; }

        [Display(Name = "All Rooms Mobile Link", GroupName = "Content", Order = 850)]
        [CultureSpecific]
        public virtual LinkItem AllRoomsMobileLink { get; set; }

        [Display(Name = "All Rooms Text", GroupName = "Content", Order = 900)]
        [CultureSpecific]
        public virtual string AllRoomsText { get; set; }

    }
}
