using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGWeddingFilterBaseBlock", GUID = "FAA8C223-2355-434B-B558-7B6E9FEF125D", GroupName = "Hospitality")]
    public class HBGWeddingFilterBaseBlock : HBGBaseBlock
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

        [Display(Name = "By Occasion", GroupName = "Filters", Order = 300)]
        [CultureSpecific]
        public virtual ContentArea ByOccasion { get; set; }

    }
}
