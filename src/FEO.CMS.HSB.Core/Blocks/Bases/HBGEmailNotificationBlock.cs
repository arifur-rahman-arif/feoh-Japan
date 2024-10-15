using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGEmailNotificationBlock", GUID = "38A9FF4C-8CC7-4362-9DBE-F63859C0618B", GroupName = "Hospitality")]
    public class HBGEmailNotificationBlock : HBGBaseBlock
    {
        [Display(Name = "From Email", GroupName = "Email Settings", Order = 100)]
        [CultureSpecific]
        public virtual string FromEmail { get; set; }

        [Display(Name = "To Email", GroupName = "Email Settings", Order = 200)]
        [CultureSpecific]
        public virtual string ToEmail { get; set; }

        [Display(Name = "Cc Email", GroupName = "Email Settings", Order = 250)]
        [CultureSpecific]
        public virtual string CcEmail { get; set; }

        [Display(Name = "Subject Email", GroupName = "Email Settings", Order = 300)]
        [CultureSpecific]
        public virtual string SubjectEmail { get; set; }

        [Display(Name = "Body Email", GroupName = "Email Settings", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString BodyEmail { get; set; }

    }
}
