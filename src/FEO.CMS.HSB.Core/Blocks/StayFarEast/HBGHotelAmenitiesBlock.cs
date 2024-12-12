using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGHotelAmenitiesBlock", GUID = "58B39204-972E-4D9F-A17D-A8F3DE12A701", GroupName = "Hospitality")]
    public class HBGHotelAmenitiesBlock : HBGBaseBlock
    {
        [Display(Name = "Datasource", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Datasource { get; set; }
    }
}
