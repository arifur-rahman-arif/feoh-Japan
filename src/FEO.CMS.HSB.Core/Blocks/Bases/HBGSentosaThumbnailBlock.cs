using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGSentosaThumbnailBlock", GUID = "33C2BC6C-6C10-4389-8C74-B3FC8A604382", GroupName = "Hospitality")]
    public class HBGSentosaThumbnailBlock : HBGBaseBlock
    {
        [Display(Name = "Deal Listing Thumbnail", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference DealListingThumbnail { get; set; }

        [Display(Name = "Static Deal Thumbnail", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference StaticDealThumbnail { get; set; }

    }
}
