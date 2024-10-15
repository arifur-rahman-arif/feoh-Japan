using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGDealFilterBlock", GUID = "60856381-CB41-4466-96F9-EA241C1D3805", GroupName = "Hospitality")]
    public class HBGDealFilterBlock : HBGBaseBlock
    {
        [Display(Name = "All Hotels Option", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference AllHotelsOption { get; set; }

        [Display(Name = "All Hotels Option Value", GroupName = "Content", Order = 150)]
        [CultureSpecific]
        public virtual string AllHotelsOptionValue { get; set; }

        [Display(Name = "All Residences Option", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual ContentReference AllResidencesOption { get; set; }

        [Display(Name = "All Residences Option Value", GroupName = "Content", Order = 250)]
        [CultureSpecific]
        public virtual string AllResidencesOptionValue { get; set; }

        [Display(Name = "Hotels", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        public virtual ContentArea Hotels { get; set; }

        [Display(Name = "Serviced Residences", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        public virtual ContentArea ServicedResidences { get; set; }

        [Display(Name = "Show All Option", GroupName = "Content", Order = 500)]
        [CultureSpecific]
        public virtual bool ShowAllOption { get; set; }

    }
}
