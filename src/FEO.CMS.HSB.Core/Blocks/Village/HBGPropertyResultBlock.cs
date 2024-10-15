using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGPropertyResultBlock", GUID = "474637DC-8859-4803-A241-6FE2C588661B", GroupName = "Hospitality")]
    public class HBGPropertyResultBlock : HBGBaseBlock
    {
        [Display(Name = "Newsletter Component", GroupName = "Settings", Order = 400)]
        [CultureSpecific]
        public virtual ContentReference NewsletterComponent { get; set; }

    }
}
