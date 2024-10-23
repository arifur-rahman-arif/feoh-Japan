using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGDealParticipantBlock", GUID = "B585A344-4458-42C4-A4FE-8DF9CC3E3626", GroupName = "Hospitality")]
    public class HBGDealParticipantBlock : HBGBaseBlock
    {
        [Display(Name = "Listing", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Listing { get; set; }

        [Display(Name = "Parameters", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual string Parameters { get; set; }

        [Display(Name = "Redirect URL", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual LinkItem RedirectURL { get; set; }

        [Display(Name = "RibbonText", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual string RibbonText { get; set; }

        [Display(Name = "Cover", GroupName = "Settings", Order = 300)]
        [CultureSpecific]
        public virtual bool Cover { get; set; }

        [Display(Name = "Label1", GroupName = "Settings", Order = 300)]
        [CultureSpecific]
        public virtual string Label1 { get; set; }

        [Display(Name = "Label2", GroupName = "Settings", Order = 400)]
        [CultureSpecific]
        public virtual string Label2 { get; set; }

        [Display(Name = "Label3", GroupName = "Settings", Order = 500)]
        [CultureSpecific]
        public virtual string Label3 { get; set; }

    }
}
