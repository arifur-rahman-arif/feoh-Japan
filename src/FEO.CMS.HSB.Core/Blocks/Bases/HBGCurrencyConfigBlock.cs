using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGCurrencyConfigBlock", GUID = "51515C0C-0AF7-49C7-98FE-734F678BCD6E", GroupName = "Hospitality")]
    public class HBGCurrencyConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Default Currency", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference DefaultCurrency { get; set; }

    }
}
