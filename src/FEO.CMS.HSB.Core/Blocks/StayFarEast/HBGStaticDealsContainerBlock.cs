using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStaticDealsContainerBlock", GUID = "04F916E6-51DE-4C7B-8DDB-FFA973F89DB4", GroupName = "Hospitality")]
    public class HBGStaticDealsContainerBlock : HBGPreviewConfigBlock
    {
        [Display(Name = "Datasource", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Datasource { get; set; }
    }
}
