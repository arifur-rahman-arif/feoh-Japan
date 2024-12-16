using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGThumbnailConfigBlock", GUID = "2E7FE8DF-EB31-466F-A61F-82F23CA51125", GroupName = "Hospitality")]
    public class HBGThumbnailConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Offset Instruction", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual string OffsetInstruction { get; set; }

        [Display(Name = "Thumbnail To Use", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual ContentReference ThumbnailToUse { get; set; }

    }
}
