using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGImageWithCaptionBlock", GUID = "3D1A42BF-BEEF-46ED-9CE5-AE06A699D8D4", GroupName = "Hospitality")]
    public class HBGImageWithCaptionBlock : HBGBaseBlock
    {
        [Display(Name = "Caption", GroupName = "Image", Order = 100)]
        [CultureSpecific]
        public virtual string Caption { get; set; }

    }
}
