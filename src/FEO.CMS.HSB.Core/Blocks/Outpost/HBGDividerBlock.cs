using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGDividerBlock", GUID = "F8AA3C8B-5674-4707-833D-11326C8032D7", GroupName = "Hospitality")]
    public class HBGDividerBlock : HBGBaseBlock
    {
        [Display(Name = "Divider Image", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference DividerImage { get; set; }

        [Display(Name = "Tablet Divider Image", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference TabletDividerImage { get; set; }

        [Display(Name = "Mobile Divider Image", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference MobileDividerImage { get; set; }

    }
}
