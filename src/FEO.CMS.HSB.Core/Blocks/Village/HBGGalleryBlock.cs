using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGGalleryBlock", GUID = "985B0D02-B5FE-4CE9-AD37-0CB6EB1E079F", GroupName = "Hospitality")]
    public class HBGGalleryBlock : HBGBaseBlock
    {
        [Display(Name = "Button Title", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        public virtual string ButtonTitle { get; set; }

    }
}
