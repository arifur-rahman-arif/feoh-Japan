using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGPageSizeConfigBlock", GUID = "9A21657C-6D95-4743-B87C-FE210107AD85", GroupName = "Hospitality")]
    public class HBGPageSizeConfigBlock : HBGBaseBlock
    {
        [Display(Name = "MaxPageSize", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual int MaxPageSize { get; set; }

    }
}
