using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.Outpost
{
    [ContentType(DisplayName = "HBGPackagePage", GUID = "C248747C-4BAF-44B9-B17D-5D1ABFB33606", GroupName = "Hospitality")]
    public class HBGPackagePage : HBGBasePage
    {
        [Display(Name = "Tablet Image", GroupName = "Images", Order = 25)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference TabletImage { get; set; }

        [Display(Name = "Large Thumbnail Mobile", GroupName = "Images", Order = 50)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LargeThumbnailMobile { get; set; }

        [Display(Name = "IsLearnMoreDisable", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual bool IsLearnMoreDisable { get; set; }

        [Display(Name = "Listing Desktop Image", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ListingDesktopImage { get; set; }

        [Display(Name = "Listing Mobile Image", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ListingMobileImage { get; set; }

    }
}
