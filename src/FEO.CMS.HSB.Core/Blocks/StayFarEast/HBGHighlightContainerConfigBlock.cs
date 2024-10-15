using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGHighlightContainerConfigBlock", GUID = "5895B15A-5B74-4365-98B3-643A3029E28B", GroupName = "Hospitality")]
    public class HBGHighlightContainerConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Can Be Hidden", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual bool CanBeHidden { get; set; }

        [Display(Name = "Component ID", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual string ComponentID { get; set; }

        [Display(Name = "Hide On Mobile", GroupName = "Settings", Order = 300)]
        [CultureSpecific]
        public virtual bool HideOnMobile { get; set; }

        [Display(Name = "Inherit Parent Container", GroupName = "Settings", Order = 400)]
        [CultureSpecific]
        public virtual bool InheritParentContainer { get; set; }

        [Display(Name = "Scroll Message", GroupName = "Settings", Order = 500)]
        [CultureSpecific]
        public virtual string ScrollMessage { get; set; }

        [Display(Name = "Scroll To", GroupName = "Settings", Order = 600)]
        [CultureSpecific]
        public virtual string ScrollTo { get; set; }

        [Display(Name = "Sub Title", GroupName = "Settings", Order = 700)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

        [Display(Name = "Title", GroupName = "Settings", Order = 800)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Use As Modal Button", GroupName = "Settings", Order = 900)]
        [CultureSpecific]
        public virtual bool UseAsModalButton { get; set; }

        [Display(Name = "Increase Text Size", GroupName = "Settings", Order = 1000)]
        [CultureSpecific]
        public virtual bool IncreaseTextSize { get; set; }

    }
}
