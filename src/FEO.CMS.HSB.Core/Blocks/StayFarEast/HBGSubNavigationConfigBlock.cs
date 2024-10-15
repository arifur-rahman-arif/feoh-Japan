using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGSubNavigationConfigBlock", GUID = "8EDFBD38-7B84-404C-8CA3-6F03542194C7", GroupName = "Hospitality")]
    public class HBGSubNavigationConfigBlock : HBGBaseBlock
    {
        [Display(Name = "SubNavigationId", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference SubNavigationId { get; set; }

    }
}
