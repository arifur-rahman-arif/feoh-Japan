using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGExclusiveSectionBlock", GUID = "EA112CED-6F39-4B5B-9E4E-8CB5BABFF677", GroupName = "Hospitality")]
    public class HBGExclusiveSectionBlock : HBGBaseBlock
    {
        [Display(Name = "Exclusive Title", GroupName = "Exclusive Section", Order = 100)]
        [CultureSpecific]
        public virtual string ExclusiveTitle { get; set; }

        [Display(Name = "Exclusive Summary", GroupName = "Exclusive Section", Order = 200)]
        [CultureSpecific]
        public virtual string ExclusiveSummary { get; set; }

        [Display(Name = "Exclusive Special Offer List", GroupName = "Exclusive Section", Order = 300)]
        [CultureSpecific]
        public virtual ContentArea ExclusiveSpecialOfferList { get; set; }

        [Display(Name = "Exclusive Logo", GroupName = "Exclusive Section", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ExclusiveLogo { get; set; }

        [Display(Name = "HideExclusiveSection", GroupName = "Exclusive Section", Order = 600)]
        [CultureSpecific]
        public virtual bool HideExclusiveSection { get; set; }

    }
}
