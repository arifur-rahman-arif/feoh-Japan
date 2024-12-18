using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGEnquiryBlock", GUID = "00410F15-2CF6-45DD-BFE5-B4A20737F293", GroupName = "Hospitality")]
    public class HBGEnquiryBlock : HBGBaseBlock
    {
        [Display(Name = "EnquiryType", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual string EnquiryType { get; set; }

    }
}
