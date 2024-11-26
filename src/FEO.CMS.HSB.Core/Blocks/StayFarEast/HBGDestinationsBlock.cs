using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGDestinationsBlock", GUID = "C5FA2907-B0AC-45AB-9392-0BC5CB5644F3", GroupName = "Hospitality")]
    public class HBGDestinationsBlock : HBGBaseBlock
    {
        [Display(Name = "Datasource", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Datasource { get; set; }
    }
}
