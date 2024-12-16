using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGAnnouncementBlock", GUID = "E73E4A43-83EE-4379-B5C0-E90C3DBA13BE", GroupName = "Hospitality")]
    public class HBGAnnouncementBlock : HBGBaseBlock
    {
        [Display(Name = "Enabled", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool Enabled { get; set; }

        [Display(Name = "Main Content", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString MainContent { get; set; }

        [Display(Name = "End Date", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual DateTime EndDate { get; set; }

        [Display(Name = "Start Date", GroupName = SystemTabNames.Settings, Order = 300)]
        [CultureSpecific]
        public virtual DateTime StartDate { get; set; }

    }
}
