using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGContactsContainerBlock", GUID = "A9AD0E02-C50A-400C-87DE-80869BF50925", GroupName = "Hospitality")]
    public class HBGContactsContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Contacts", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentArea Contacts { get; set; }

    }
}
