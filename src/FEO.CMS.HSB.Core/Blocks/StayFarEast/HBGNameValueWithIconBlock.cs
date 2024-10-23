using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGNameValueWithIconBlock", GUID = "1DD43213-C805-4C30-BD5F-720CD258A96A", GroupName = "Hospitality")]
    public class HBGNameValueWithIconBlock : HBGNameValuePairBlock
    {
        [Display(Name = "Icon", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Icon { get; set; }

    }
}
