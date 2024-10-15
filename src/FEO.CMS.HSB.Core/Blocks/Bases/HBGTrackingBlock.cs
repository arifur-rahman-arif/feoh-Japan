using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGTrackingBlock", GUID = "33C551C5-D9BE-406F-9212-6903C00AEE74", GroupName = "Hospitality")]
    public class HBGTrackingBlock : HBGBaseBlock
    {
        [Display(Name = "Data Creative", GroupName = "Tracking", Order = 100)]
        [CultureSpecific]
        public virtual string DataCreative { get; set; }

        [Display(Name = "Data Position", GroupName = "Tracking", Order = 200)]
        [CultureSpecific]
        public virtual string DataPosition { get; set; }

    }
}
