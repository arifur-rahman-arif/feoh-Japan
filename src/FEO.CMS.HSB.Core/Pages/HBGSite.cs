using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages
{
    [ContentType(DisplayName = "HBG Site", GUID = "4253FE15-B33D-4F78-AAE0-08A0D9AEE709", GroupName = "Hospitality")]
    public class HBGSite : PageData
    {
        [Display(Name = "Booking Config", GroupName = "Configuration", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference BookingConfig { get; set; }

        [Display(Name = "Listing Config", GroupName = "Configuration", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference ListingConfig { get; set; }

        [Display(Name = "Website Config", GroupName = "Configuration", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference WebsiteConfig { get; set; }

        [Display(Name = "GTM Config", GroupName = "Configuration", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference GTMConfig { get; set; }

        [Display(Name = "Home Banner Config", GroupName = "Configuration", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference HomeBannerConfig { get; set; }


        [Display(Name = "Banner DownwardArrow Config", GroupName = "Configuration", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference BannerDownwardArrowConfig { get; set; }

        [Display(Name = "Background Config", GroupName = "Configuration", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference BackgroundConfig { get; set; }
        

    }
}
