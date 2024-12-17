using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGPageSizeBlock", GUID = "CEF5497A-0464-4C31-8147-0CD62FD88CF4", GroupName = "Hospitality")]
    public class HBGPageSizeBlock : HBGBaseBlock
    {
        [Display(Name = "Page Size", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual double PageSize { get; set; }

    }
}
