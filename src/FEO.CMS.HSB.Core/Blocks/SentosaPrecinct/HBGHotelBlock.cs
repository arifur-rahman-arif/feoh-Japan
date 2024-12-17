using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGHotelBlock", GUID = "C7AC9DEC-67A1-48E1-BC39-D5EAB4873B58", GroupName = "Hospitality")]
    public class HBGHotelBlock : HBGBaseBlock
    {
        [Display(Name = "Address", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual string Address { get; set; }

        [Display(Name = "Services", GroupName = SystemTabNames.Settings, Order = 300)]
        [CultureSpecific]
        public virtual ContentArea Services { get; set; }

        [Display(Name = "Email Address", GroupName = SystemTabNames.Settings, Order = 400)]
        [CultureSpecific]
        public virtual LinkItem EmailAddress { get; set; }

    }
}
