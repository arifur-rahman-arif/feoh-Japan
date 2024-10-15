using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Quincy
{
    [ContentType(DisplayName = "HBGAwardsBlock", GUID = "D3D64ED2-DA54-4433-A7BD-9EED2A069FDB", GroupName = "Hospitality")]
    public class HBGAwardsBlock : HBGBaseBlock
    {
        [Display(Name = "SortOrderForPopUp", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual string SortOrderForPopUp { get; set; }

        [Display(Name = "Icon", GroupName = "Image", Order = 1300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Icon { get; set; }

    }
}
