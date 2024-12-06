using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGSentosaBGStyleConfigBlock", GUID = "FF32D462-FE9E-45E5-8DE6-E8DB174AC591", GroupName = "Hospitality")]
    public class HBGSentosaBGStyleConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Background Color Style Names", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference BackgroundColorStyleNames { get; set; }

    }
}
