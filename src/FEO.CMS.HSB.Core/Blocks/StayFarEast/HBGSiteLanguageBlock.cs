using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGSiteLanguageBlock", GUID = "C0C393C1-2A29-43A7-9049-7CB75F0652A0", GroupName = "Hospitality")]
    public class HBGSiteLanguageBlock : HBGBaseBlock
    {
        [Display(Name = "Language", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Language { get; set; }

        [Display(Name = "Title", GroupName = "Basic Info", Order = 200)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "HideLanguage", GroupName = "Basic Info", Order = 300)]
        [CultureSpecific]
        public virtual bool HideLanguage { get; set; }

        [Display(Name = "Language Icon", GroupName = "Basic Info", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LanguageIcon { get; set; }

    }
}
