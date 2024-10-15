using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGItemRedirectionConfigBlock", GUID = "744B1DA5-7EF4-4C02-B769-22D7A23E9002", GroupName = "Hospitality")]
    public class HBGItemRedirectionConfigBlock : HBGBaseBlock
    {
        [Display(Name = "AllowRedirection", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual bool AllowRedirection { get; set; }

    }
}
