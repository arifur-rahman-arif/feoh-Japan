using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGCarouselBlock", GUID = "5F8EE962-640C-4B66-BF14-A651A2FD7BFE", GroupName = "Hospitality")]
    public class HBGCarouselBlock : HBGBaseBlock
    {
        [Display(Name = "Video Target", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string VideoTarget { get; set; }

    }
}
