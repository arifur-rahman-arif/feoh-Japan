using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGColumnSizeBlock", GUID = "A8A0960A-C3A5-433D-A65D-1FA304F06722", GroupName = "Hospitality")]
    public class HBGColumnSizeBlock : HBGBaseBlock
    {
        [Display(Name = "Number of columns", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Numberofcolumns { get; set; }

    }
}
