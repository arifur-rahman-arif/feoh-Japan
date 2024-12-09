using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGGenericPopupRenderingBlock", GUID = "F50113E9-D80C-4D53-AA85-885268FBD2E5", GroupName = "Hospitality")]
    public class HBGGenericPopupRenderingBlock : HBGNewsletterSubscriptionBlock
    {
        [Display(Name = "ExitIntent", GroupName = "Exit Intent Section", Order = 100)]
        [CultureSpecific]
        public virtual bool ExitIntent { get; set; }

    }
}
