using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGHotelInformationBlock", GUID = "A2169B39-6EA9-4359-B7B6-0BBF44CD780E", GroupName = "Hospitality")]
    public class HBGHotelInformationBlock : HBGBaseBlock
    {
        [Display(Name = "Check In", GroupName = "Profile", Order = 100)]
        [CultureSpecific]
        public virtual string CheckIn { get; set; }

        [Display(Name = "Check Out", GroupName = "Profile", Order = 200)]
        [CultureSpecific]
        public virtual string CheckOut { get; set; }

        [Display(Name = "Notice Title", GroupName = "Notice", Order = 300)]
        [CultureSpecific]
        public virtual string NoticeTitle { get; set; }

        [Display(Name = "Notice Description", GroupName = "Notice", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString NoticeDescription { get; set; }

    }
}
