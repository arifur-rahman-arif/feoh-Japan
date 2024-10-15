using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGSocialShareBlock", GUID = "ED52487A-1AC8-4B8B-A254-5D9FE816C63A", GroupName = "Hospitality")]
    public class HBGSocialShareBlock : HBGBaseBlock
    {
        [Display(Name = "Social Share List", GroupName = "Social Share", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea SocialShareList { get; set; }

        [Display(Name = "Mailto Subject", GroupName = "Social Share", Order = 200)]
        [CultureSpecific]
        public virtual string MailtoSubject { get; set; }

        [Display(Name = "Mailto Body", GroupName = "Social Share", Order = 300)]
        [CultureSpecific]
        public virtual XhtmlString MailtoBody { get; set; }

    }
}
