using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGCountryBlock", GUID = "8123A58D-0216-4979-B8A5-EC2FCC554151", GroupName = "Hospitality")]
    public class HBGCountryBlock : HBGBaseBlock
    {
        [Display(Name = "ISO Code", GroupName = "Profile", Order = 100)]
        [CultureSpecific]
        public virtual string ISOCode { get; set; }

        [Display(Name = "Latitude", GroupName = "Coordinates", Order = 100)]
        [CultureSpecific]
        public virtual string Latitude { get; set; }

        [Display(Name = "Longitude", GroupName = "Coordinates", Order = 200)]
        [CultureSpecific]
        public virtual string Longitude { get; set; }

    }
}
