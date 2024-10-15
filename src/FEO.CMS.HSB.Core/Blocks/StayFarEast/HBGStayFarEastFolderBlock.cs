using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStayFarEastFolderBlock", GUID = "B73F5552-7F32-4A67-8561-F9BA6C342EBF", GroupName = "Hospitality")]
    public class HBGStayFarEastFolderBlock : HBGBaseBlock
    {
        [Display(Name = "Show In Breadcrumb", GroupName = "Navigation", Order = 100)]
        [CultureSpecific]
        public virtual bool ShowInBreadcrumb { get; set; }

        [Display(Name = "Title", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

    }
}
