using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGArticlePage", GUID = "6C217F47-9E2F-4A8C-90D0-40040974BA51", GroupName = "Hospitality")]
    public class HBGArticlePage : HBGBasePage
    {
        [Display(Name = "Is Private", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual bool IsPrivate { get; set; }

        [Display(Name = "Mobile Large Thumnail", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference MobileLargeThumnail { get; set; }

        [Display(Name = "Item Size", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        public virtual int ItemSize { get; set; }

        [Display(Name = "Ribbon Text", GroupName = "Images", Order = 400)]
        [CultureSpecific]
        public virtual string RibbonText { get; set; }

    }
}
