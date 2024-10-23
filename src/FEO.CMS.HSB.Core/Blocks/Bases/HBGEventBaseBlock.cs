using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGEventBaseBlock", GUID = "DE016C53-F074-4AFB-A68D-95291F008D94", GroupName = "Hospitality")]
    public class HBGEventBaseBlock : HBGBaseBlock
    {
        [Display(Name = "Preview Images", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        public virtual string PreviewImages { get; set; }

        [Display(Name = "Gallery", GroupName = "Images", Order = 850)]
        [CultureSpecific]
        public virtual string Gallery { get; set; }

        [Display(Name = "Brochure Download", GroupName = "Images", Order = 1000)]
        [CultureSpecific]
        public virtual LinkItem BrochureDownload { get; set; }

        [Display(Name = "Ribbon Text", GroupName = "Images", Order = 1100)]
        [CultureSpecific]
        public virtual string RibbonText { get; set; }

        [Display(Name = "Enable Enquiry CTA", GroupName = "Images", Order = 1200)]
        [CultureSpecific]
        public virtual bool EnableEnquiryCTA { get; set; }

    }
}
