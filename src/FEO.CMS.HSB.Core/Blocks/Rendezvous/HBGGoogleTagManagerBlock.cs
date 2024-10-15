using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Rendezvous
{
    [ContentType(DisplayName = "HBGGoogleTagManagerBlock", GUID = "7EA4E1FA-8B1D-49F7-8C50-B4BD75793CAD", GroupName = "Hospitality")]
    public class HBGGoogleTagManagerBlock : HBGBaseBlock
    {
        [Display(Name = "GTMHeadScript", GroupName = "Google Tag Manager", Order = 100)]
        [CultureSpecific]
        public virtual XhtmlString GTMHeadScript { get; set; }

        [Display(Name = "GTMBodyScript", GroupName = "Google Tag Manager", Order = 200)]
        [CultureSpecific]
        public virtual XhtmlString GTMBodyScript { get; set; }

        [Display(Name = "IsEnabled", GroupName = "Google Tag Manager", Order = 300)]
        [CultureSpecific]
        public virtual bool IsEnabled { get; set; }

    }
}
