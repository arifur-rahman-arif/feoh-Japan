using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGBlogDetailPage", GUID = "320F5FD6-7A51-4401-86BE-A00561001051", GroupName = "Hospitality")]
    public class HBGBlogDetailPage : HBGBasePage
    {
        [Display(Name = "Offset Instruction", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual string OffsetInstruction { get; set; }

        [Display(Name = "Thumbnail To Use", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual ContentReference ThumbnailToUse { get; set; }
    }
}
