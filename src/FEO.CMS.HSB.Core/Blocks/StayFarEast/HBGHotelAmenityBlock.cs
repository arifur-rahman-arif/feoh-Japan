using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGHotelAmenityBlock", GUID = "D3A7E194-7A4D-418F-8DF6-865BBCD54EE8", GroupName = "Hospitality")]
    public class HBGHotelAmenityBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Sub Title", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

    }
}
