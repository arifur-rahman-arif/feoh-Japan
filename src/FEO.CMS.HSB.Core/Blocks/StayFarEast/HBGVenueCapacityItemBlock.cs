using EPiServer.Core;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGVenueCapacityItemBlock", GUID = "AD532904-48F5-482B-8E64-8F654D4AB185", GroupName = "Hospitality")]
    public class HBGVenueCapacityItemBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = "Main Content", Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Icon", GroupName = "Main Content", Order = 200)]
        [CultureSpecific]
        public virtual ContentReference Icon { get; set; }

        [Display(Name = "Capacity", GroupName = "Main Content", Order = 300)]
        [CultureSpecific]
        public virtual double Capacity { get; set; }

    }
}
