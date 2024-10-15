using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Clan
{
    [ContentType(DisplayName = "HBGDragAndSlideComponentBlock", GUID = "AE177C72-0522-443E-AD12-F663EAC60949", GroupName = "Hospitality")]
    public class HBGDragAndSlideComponentBlock : HBGBaseBlock
    {
        [Display(Name = "PanelContent", GroupName = "Component", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference PanelContent { get; set; }

        [Display(Name = "DragSlideItems", GroupName = "Component", Order = 300)]
        [CultureSpecific]
        public virtual ContentArea DragSlideItems { get; set; }

        [Display(Name = "ScrollText", GroupName = "Component", Order = 400)]
        [CultureSpecific]
        public virtual string ScrollText { get; set; }

        [Display(Name = "SwipeText", GroupName = "Component", Order = 500)]
        [CultureSpecific]
        public virtual string SwipeText { get; set; }

        [Display(Name = "SwipeLeftText", GroupName = "Component", Order = 600)]
        [CultureSpecific]
        public virtual string SwipeLeftText { get; set; }

        [Display(Name = "SwipeRightText", GroupName = "Component", Order = 800)]
        [CultureSpecific]
        public virtual string SwipeRightText { get; set; }

        [Display(Name = "ButtonText", GroupName = "Component", Order = 900)]
        [CultureSpecific]
        public virtual string ButtonText { get; set; }

    }
}
