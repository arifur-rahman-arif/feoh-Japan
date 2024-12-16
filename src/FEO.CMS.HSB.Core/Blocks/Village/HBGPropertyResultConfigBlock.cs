using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGPropertyResultConfigBlock", GUID = "32CC1A09-B76E-4A64-96DB-4B32CAF98BE6", GroupName = "Hospitality")]
    public class HBGPropertyResultConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Display Newsletter", GroupName = SystemTabNames.Settings, Order = 50)]
        [CultureSpecific]
        public virtual bool DisplayNewsletter { get; set; }

        [Display(Name = "NewsLetter Position", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual double NewsLetterPosition { get; set; }

        [Display(Name = "Listing Type", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual ContentReference ListingType { get; set; }

    }
}
