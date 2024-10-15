using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGHeaderContainerTitleConfigBlock", GUID = "11A698E7-4964-428A-83E3-2DF942B5E906", GroupName = "Hospitality")]
    public class HBGHeaderContainerTitleConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Sub Title", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

    }
}
