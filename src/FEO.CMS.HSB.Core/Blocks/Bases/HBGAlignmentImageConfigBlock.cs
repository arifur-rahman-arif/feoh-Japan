using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGAlignmentImageConfigBlock", GUID = "FECC7819-7DBA-4D35-BB6B-904485C2A04E", GroupName = "Hospitality")]
    public class HBGAlignmentImageConfigBlock : HBGStickySummaryConfigBlock
    {
        [Display(Name = "Alignment", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        [AllowedTypes(AllowedTypes = new[] { typeof(HBGNameValuePairBlock) })]
        public virtual ContentReference Alignment { get; set; }

    }
}
