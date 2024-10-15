using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaycationDealsConfigBlock", GUID = "E4C4A0A6-5FC7-4821-9628-EB8AA59F032E", GroupName = "Hospitality")]
    public class HBGStaycationDealsConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Show", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual bool Show { get; set; }

    }
}
