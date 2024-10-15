using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGPropertyFilterConfigBlock", GUID = "02E8EF78-2B58-4B60-9C7B-3D963D783C7B", GroupName = "Hospitality")]
    public class HBGPropertyFilterConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Hide Filter", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual bool HideFilter { get; set; }

    }
}
