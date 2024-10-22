using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGOasiaEventsBlock", GUID = "56332E4F-2F3D-4F59-9BF0-485334E404E8", GroupName = "Hospitality")]
    public class HBGOasiaEventsBlock : HBGViewBlock
    {
        [Display(Name = "Capacity", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Capacity { get; set; }

    }
}
