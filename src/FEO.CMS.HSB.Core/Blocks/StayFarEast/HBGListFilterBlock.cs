using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGListFilterBlock", GUID = "19B6CE81-F7D9-4FFC-9324-AA3B0F87FD8E", GroupName = "Hospitality")]
    public class HBGListFilterBlock : HBGBaseBlock
    {
        [Display(Name = "Select Items", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea SelectItems { get; set; }

    }
}
