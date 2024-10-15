using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGVenueContainerBlock", GUID = "8DF77D05-CBD8-4C42-9CF3-9B0933F5EC81", GroupName = "Hospitality")]
    public class HBGVenueContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Venues", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Venues { get; set; }

        [Display(Name = "See All", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual LinkItem SeeAll { get; set; }

        [Display(Name = "Services", GroupName = "Settings", Order = 300)]
        [CultureSpecific]
        public virtual ContentArea Services { get; set; }

    }
}
