using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGApartmentDetailsContainerBlock", GUID = "EA6493A8-B7A7-42A7-A147-85DF816077E3", GroupName = "Hospitality")]
    public class HBGApartmentDetailsContainerBlock : HBGBaseBlock
    {
        [Display(Name = "About The Apartment", GroupName = SystemTabNames.Settings, Order = 50)]
        [CultureSpecific]
        public virtual string AboutTheApartment { get; set; }

        [Display(Name = "Services You Will Enjoy", GroupName = SystemTabNames.Settings, Order = 250)]
        [CultureSpecific]
        public virtual string ServicesYouWillEnjoy { get; set; }

        [Display(Name = "Close", GroupName = SystemTabNames.Settings, Order = 550)]
        [CultureSpecific]
        public virtual string Close { get; set; }

    }
}
