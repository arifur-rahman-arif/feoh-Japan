using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGNumberToShowBlock", GUID = "CD2F932E-FEFC-42C6-81B8-AAAB619B2399", GroupName = "Hospitality")]
    public class HBGNumberToShowBlock : HBGBaseBlock
    {
        [Display(Name = "Number To Show On Desktop", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual double NumberToShowOnDesktop { get; set; }

        [Display(Name = "Number To Show On Mobile", GroupName = "Settings", Order = 150)]
        [CultureSpecific]
        public virtual double NumberToShowOnMobile { get; set; }

    }
}
