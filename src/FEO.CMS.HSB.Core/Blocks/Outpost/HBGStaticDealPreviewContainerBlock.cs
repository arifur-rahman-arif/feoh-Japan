using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGStaticDealPreviewContainerBlock", GUID = "148E99AB-6793-48B8-9C5D-DE17F8499A8D", GroupName = "Hospitality")]
    public class HBGStaticDealPreviewContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Deals", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Deals { get; set; }

    }
}
