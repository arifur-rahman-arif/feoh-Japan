using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGOasiaEventsBlock", GUID = "56332E4F-2F3D-4F59-9BF0-485334E404E8", GroupName = "Hospitality")]
    public class HBGOasiaEventsBlock : HBGBaseBlock
    {
        [Display(Name = "Capacity", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Capacity { get; set; }

    }
}
