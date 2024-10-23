using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGDealTagBlock", GUID = "8D7BED67-6325-4867-806C-E638B625A3FF", GroupName = "Hospitality")]
    public class HBGDealTagBlock : HBGBaseBlock
    {
        [Display(Name = "Icon", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Icon { get; set; }

        [Display(Name = "TagName", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string TagName { get; set; }

        [Display(Name = "IsMemberExclusive", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual bool IsMemberExclusive { get; set; }

    }
}
