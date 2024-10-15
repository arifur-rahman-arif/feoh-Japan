using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGStaticContentWithTitleBlock", GUID = "7A0C0E31-BC20-40F3-9D6A-9AD0229DED2E", GroupName = "Hospitality")]
    public class HBGStaticContentWithTitleBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

    }
}
