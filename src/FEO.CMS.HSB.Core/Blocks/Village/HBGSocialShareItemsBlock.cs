using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGSocialShareItemsBlock", GUID = "F9D16185-09F0-4415-9BFA-3A191523FEAC", GroupName = "Hospitality")]
    public class HBGSocialShareItemsBlock : HBGNameValuePairWithIconBlock
    {
        [Display(Name = "Share URL", GroupName = "Social Share", Order = 100)]
        [CultureSpecific]
        public virtual string ShareURL { get; set; }

    }
}
