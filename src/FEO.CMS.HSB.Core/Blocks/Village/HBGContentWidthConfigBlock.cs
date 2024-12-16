using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGContentWidthConfigBlock", GUID = "39D2D24F-EAED-40B9-B3A8-542D86956BAB", GroupName = "Hospitality")]
    public class HBGContentWidthConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Full Width Content", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool FullWidthContent { get; set; }

    }
}
