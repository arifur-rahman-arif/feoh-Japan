using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGEnquiryTypeBlock", GUID = "8EFD78CC-3B6D-4D9A-9F8D-11D36FEF89F9", GroupName = "Hospitality")]
    public class HBGEnquiryTypeBlock : HBGBaseBlock
    {
        [Display(Name = "Enable Unselect Property - If this field checked, users doesn't need to select any property when user select this enquiry type", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual bool EnableUnselectProperty { get; set; }

    }
}
