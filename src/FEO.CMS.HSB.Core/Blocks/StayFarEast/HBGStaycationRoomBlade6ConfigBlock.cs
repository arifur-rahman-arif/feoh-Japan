using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationRoomBlade6ConfigBlock", GUID = "3096B5EB-DF5A-4098-ABE4-4DA6B203B51B", GroupName = "Hospitality")]
    public class HBGStaycationRoomBlade6ConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Show", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual bool Show { get; set; }

    }
}
