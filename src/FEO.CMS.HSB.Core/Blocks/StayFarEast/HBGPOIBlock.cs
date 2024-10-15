using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGPOIBlock", GUID = "252F6E4B-5EAB-4015-BD9C-B98931018BE5", GroupName = "Hospitality")]
    public class HBGPOIBlock : HBGBaseBlock
    {
        [Display(Name = "Icon", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Icon { get; set; }

        [Display(Name = "Marker Name", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string MarkerName { get; set; }

    }
}
