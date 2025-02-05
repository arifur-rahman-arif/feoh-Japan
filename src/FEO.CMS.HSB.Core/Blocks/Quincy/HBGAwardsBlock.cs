using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Quincy
{
    [ContentType(DisplayName = "HBGAwardsBlock", GUID = "D3D64ED2-DA54-4433-A7BD-9EED2A069FDB", Description = "Quincy", GroupName = "Hospitality")]
    public class HBGAwardsBlock : HBGRootBlock
    {
        [Display(Name = "SortOrderForPopUp", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual string SortOrderForPopUp { get; set; }

        [Display(Name = "Icon", GroupName = "Image", Order = 1300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Icon { get; set; }
        [Display(Name = "SortOrder", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual int SortOrder { get; set; }

    }
}
