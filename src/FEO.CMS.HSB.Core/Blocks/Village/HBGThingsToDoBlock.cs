using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGThingsToDoBlock", GUID = "B68AF122-F1C9-4E8D-B2E8-E129155C5517", GroupName = "Hospitality")]
    public class HBGThingsToDoBlock : HBGBaseBlock
    {
        [Display(Name = "Banner Title", GroupName = "Banner", Order = 150)]
        [CultureSpecific]
        public virtual string BannerTitle { get; set; }

        [Display(Name = "Link", GroupName = "Banner", Order = 300)]
        [CultureSpecific]
        public virtual LinkItem Link { get; set; }

        [Display(Name = "See All Things To Do", GroupName = "Basic Info", Order = 300)]
        [CultureSpecific]
        public virtual LinkItem SeeAllThingsToDo { get; set; }

        [Display(Name = "Highlight Image", GroupName = "Banner", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference HighlightImage { get; set; }

        [Display(Name = "Sub Title", GroupName = "Basic Info", Order = 400)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

        [Display(Name = "Background Image", GroupName = "Banner", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BackgroundImage { get; set; }

        [Display(Name = "Mobile Highlight Image", GroupName = "Banner", Order = 600)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference MobileHighlightImage { get; set; }

    }
}
