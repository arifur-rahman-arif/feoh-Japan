using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGSeatingConfigurationItemBlock", GUID = "688069CA-5484-4D38-AE97-E28C09987BEC", GroupName = "Hospitality")]
    public class HBGSeatingConfigurationItemBlock : HBGBaseBlock
    {
        [Display(Name = "Add Background", GroupName = "Section", Order = 100)]
        [CultureSpecific]
        public virtual bool AddBackground { get; set; }

    }
}
