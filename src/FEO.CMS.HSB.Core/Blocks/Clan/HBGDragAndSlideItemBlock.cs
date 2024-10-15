using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Clan
{
    [ContentType(DisplayName = "HBGDragAndSlideItemBlock", GUID = "347059BA-93F4-4640-92C6-7C0F5261A4B4", GroupName = "Hospitality")]
    public class HBGDragAndSlideItemBlock : HBGBaseBlock
    {
        [Display(Name = "LeftPanelTitle", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string LeftPanelTitle { get; set; }

        [Display(Name = "LeftPanelSubtitle", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string LeftPanelSubtitle { get; set; }

        [Display(Name = "LeftPanelDescription", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString LeftPanelDescription { get; set; }

        [Display(Name = "LeftPanelContentImage", GroupName = "Content", Order = 800)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LeftPanelContentImage { get; set; }

        [Display(Name = "LeftPanelMobileContentImage", GroupName = "Content", Order = 900)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LeftPanelMobileContentImage { get; set; }

        [Display(Name = "RightPanelTitle", GroupName = "Content", Order = 1000)]
        [CultureSpecific]
        public virtual string RightPanelTitle { get; set; }

        [Display(Name = "RightPanelSubtitle", GroupName = "Content", Order = 1100)]
        [CultureSpecific]
        public virtual string RightPanelSubtitle { get; set; }

        [Display(Name = "RightPanelDescription", GroupName = "Content", Order = 1200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString RightPanelDescription { get; set; }

        [Display(Name = "RightPanelContentImage", GroupName = "Content", Order = 1300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference RightPanelContentImage { get; set; }

        [Display(Name = "RightPanelMobileContentImage", GroupName = "Content", Order = 1400)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference RightPanelMobileContentImage { get; set; }

    }
}
