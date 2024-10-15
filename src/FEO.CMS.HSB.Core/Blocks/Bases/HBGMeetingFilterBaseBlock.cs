using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGMeetingFilterBaseBlock", GUID = "44D6C9E5-2B9C-4E69-84F1-978204E9A3E7", GroupName = "Hospitality")]
    public class HBGMeetingFilterBaseBlock : HBGBaseBlock
    {
        [Display(Name = "By Hotel", GroupName = "Filters", Order = 50)]
        [CultureSpecific]
        public virtual ContentArea ByHotel { get; set; }

        [Display(Name = "By Capacity", GroupName = "Filters", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea BySize { get; set; }

        [Display(Name = "By Room Setting", GroupName = "Filters", Order = 200)]
        [CultureSpecific]
        public virtual ContentArea ByRoomSetting { get; set; }

    }
}
