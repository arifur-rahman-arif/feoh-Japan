using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGNewsListingCarouselBlock", GUID = "1032C8D4-EDAD-4180-974D-326FD80BFDED", GroupName = "Hospitality")]
    public class HBGNewsListingCarouselBlock : HBGBaseBlock
    {
        [Display(Name = "See All Link", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual LinkItem SeeAllLink { get; set; }

    }
}
