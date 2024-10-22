using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGOasiaDealFilterBlock", GUID = "947C7EDF-C6E0-4E85-A6D0-C3E2C815D173", GroupName = "Hospitality")]
    public class HBGOasiaDealFilterBlock : HBGBaseBlock
    {
        [Display(Name = "All Hotels Option", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference AllHotelsOption { get; set; }

        [Display(Name = "All Residences Option", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual ContentReference AllResidencesOption { get; set; }

        [Display(Name = "AllDealsName", GroupName = SystemTabNames.Content, Order = 250)]
        [CultureSpecific]
        public virtual string AllDealsName { get; set; }

        [Display(Name = "Hotels", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual ContentArea Hotels { get; set; }

        [Display(Name = "Serviced Residences", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        public virtual ContentArea ServicedResidences { get; set; }

        [Display(Name = "Show All Option", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        public virtual bool ShowAllOption { get; set; }

        [Display(Name = "DealCategories", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        public virtual ContentArea DealCategories { get; set; }

    }
}
