using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGPOIBlock", GUID = "252F6E4B-5EAB-4015-BD9C-B98931018BE5", GroupName = "Hospitality")]
    public class HBGPOIBlock : HBGRootBlock
    {
        [Display(Name = "Icon", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Icon { get; set; }

        [Display(Name = "Marker Name", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string MarkerName { get; set; }
    }
}
