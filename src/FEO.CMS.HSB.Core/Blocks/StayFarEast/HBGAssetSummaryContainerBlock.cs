using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGAssetSummaryContainerBlock", GUID = "9F35332F-ACFB-4630-B113-CEDC451B3518", GroupName = "Hospitality")]
    public class HBGAssetSummaryContainerBlock : HBGBaseBlock
    {
        [Display(Name = "ChildrenFolderReference", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference ChildrenFolderReference { get; set; }
    }
}
