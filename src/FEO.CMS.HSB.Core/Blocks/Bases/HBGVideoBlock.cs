using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGVideoBlock", GUID = "D6AC42B4-1259-4FBA-AACE-48D6B12E086B", GroupName = "Hospitality")]
    public class HBGVideoBlock : HBGImageWithCaptionBlock
    {
        [Display(Name = "Video Source", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual LinkItem VideoSource { get; set; }

    }
}
