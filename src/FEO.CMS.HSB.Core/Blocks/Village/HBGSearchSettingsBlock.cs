using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGSearchSettingsBlock", GUID = "E413F910-AE4F-451C-8346-7CC83BE1D16A", GroupName = "Hospitality")]
    public class HBGSearchSettingsBlock : HBGBaseBlock
    {
        [Display(Name = "PageSize", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual string PageSize { get; set; }

    }
}
