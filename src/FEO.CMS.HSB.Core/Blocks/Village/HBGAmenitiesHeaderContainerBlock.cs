using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGAmenitiesHeaderContainerBlock", GUID = "928C2851-588C-4BF6-A874-EBE7F1781202", GroupName = "Hospitality")]
    public class HBGAmenitiesHeaderContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = "Settings", Order = 50)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "SubTitle", GroupName = "Settings", Order = 150)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

    }
}
