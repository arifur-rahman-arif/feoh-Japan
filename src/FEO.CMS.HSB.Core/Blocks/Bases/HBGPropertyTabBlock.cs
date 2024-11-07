using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGPropertyTabBlock", GUID = "5283FD4F-8394-4552-9901-33C3A0C3227E", GroupName = "Hospitality")]
    public class HBGPropertyTabBlock : HBGBaseBlock
    {
        [Display(Name = "Hotel Tab", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual LinkItem HotelTab { get; set; }

        [Display(Name = "Residence Tab", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual LinkItem ResidenceTab { get; set; }

    }
}
