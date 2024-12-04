using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGBenefitItemBlock", GUID = "01647EEB-5C3A-4EC2-9A1E-7DF13E546EE7", GroupName = "Hospitality")]
    public class HBGBenefitItemBlock : HBGRootBlock
    {
        [Display(Name = "Benefit Icon", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BenefitIcon { get; set; }

    }
}
