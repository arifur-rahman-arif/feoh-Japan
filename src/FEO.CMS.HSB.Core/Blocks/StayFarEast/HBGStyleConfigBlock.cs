using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "StayFarEast HBGStyleConfigBlock", GUID = "777833A1-7721-42D3-964D-F7360924CA2F", GroupName = "Hospitality")]
    public class StayFarEastHBGStyleConfigBlock : HBGRootBlock
    {
        [Display(Name = "Style Names", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea StyleNames { get; set; }

    }
}
