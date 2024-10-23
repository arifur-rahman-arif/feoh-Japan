using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGPromotionBarBlock", GUID = "01C58993-AD4F-4015-A30B-1C5D721AE077", GroupName = "Hospitality")]
    public class HBGPromotionBarBlock : HBGBaseBlock
    {
        [Display(Name = "Enabled", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual bool Enabled { get; set; }

        [Display(Name = "Main Content", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString MainContent { get; set; }

        [Display(Name = "End Date", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual DateTime EndDate { get; set; }

        [Display(Name = "Main Content For Mobile", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString MainContentForMobile { get; set; }

        [Display(Name = "Main Content For Tablet", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString MainContentForTablet { get; set; }

        [Display(Name = "Start Date", GroupName = "Settings", Order = 300)]
        [CultureSpecific]
        public virtual DateTime StartDate { get; set; }

        [Display(Name = "Background Color", GroupName = "Settings", Order = 400)]
        [CultureSpecific]
        public virtual string BackgroundColor { get; set; }

    }
}
