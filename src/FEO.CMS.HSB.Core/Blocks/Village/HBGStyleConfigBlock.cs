using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "Village HBGStyleConfigBlock", GUID = "9C523811-08B1-4F8C-B9D1-8B9BC700D573", GroupName = "Hospitality")]
    public class VillageHBGStyleConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Divider Color Style Names", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual ContentReference DividerColorStyleNames { get; set; }

        [Display(Name = "IsDividerDisplay", GroupName = "Settings", Order = 300)]
        [CultureSpecific]
        public virtual bool IsDividerDisplay { get; set; }

        [Display(Name = "Link Color Style Name", GroupName = "Settings", Order = 400)]
        [CultureSpecific]
        public virtual ContentReference LinkColorStyleName { get; set; }

    }
}
