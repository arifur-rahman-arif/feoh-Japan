using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGEventSpecialistBlock", GUID = "854EBD05-0D99-4CCB-871F-6D63BAE2D5EA", GroupName = "Hospitality")]
    public class HBGEventSpecialistBlock : HBGBaseBlock
    {
        [Display(Name = "Thumbnail Image", GroupName = "Event Specialist Information", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ThumbnailImage { get; set; }

        [Display(Name = "Specialist Title", GroupName = "Event Specialist Information", Order = 200)]
        [CultureSpecific]
        public virtual string SpecialistTitle { get; set; }

        [Display(Name = "Specialist Description", GroupName = "Event Specialist Information", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString SpecialistDescription { get; set; }

        [Display(Name = "SubTitle", GroupName = "Event Specialist Information", Order = 400)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

        [Display(Name = "Tablet Image", GroupName = "Event Specialist Information", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference TabletImage { get; set; }

    }
}
