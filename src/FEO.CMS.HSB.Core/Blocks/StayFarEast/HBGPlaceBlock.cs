using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGPlaceBlock", GUID = "1E169C36-2C8C-485E-9554-438D27CF3A02", GroupName = "Hospitality")]
    public class HBGPlaceBlock : HBGBaseBlock
    {
        [Display(Name = "Latitude", GroupName = "Coordinates", Order = 50)]
        [CultureSpecific]
        public virtual string Latitude { get; set; }

        [Display(Name = "Longitude", GroupName = "Coordinates", Order = 100)]
        [CultureSpecific]
        public virtual string Longitude { get; set; }

        [Display(Name = "System Code", GroupName = "Profile", Order = 100)]
        [CultureSpecific]
        public virtual string SystemCode { get; set; }

        [Display(Name = "Thumbnail", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Thumbnail { get; set; }

    }
}
