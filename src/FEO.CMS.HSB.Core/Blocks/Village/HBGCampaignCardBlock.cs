using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGCampaignCardBlock", GUID = "6DF14904-BC22-49F8-8115-B3D76053DD81", GroupName = "Hospitality")]
    public class HBGCampaignCardBlock : HBGBaseBlock
    {
        [Display(Name = "Icons", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Icons { get; set; }

    }
}
