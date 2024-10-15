using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGThumbnailPreviewBlock", GUID = "498D7F44-8DB3-4F19-AFE8-C7E3056D7B57", GroupName = "Hospitality")]
    public class HBGThumbnailPreviewBlock : HBGBaseBlock
    {
        [Display(Name = "Alternate URL", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual LinkItem AlternateURL { get; set; }

        [Display(Name = "Large Thumbnail", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LargeThumbnail { get; set; }

        [Display(Name = "Sub Title", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

        [Display(Name = "Medium Thumbnail", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference MediumThumbnail { get; set; }

        [Display(Name = "Small Thumbnail", GroupName = "Images", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference SmallThumbnail { get; set; }

    }
}
