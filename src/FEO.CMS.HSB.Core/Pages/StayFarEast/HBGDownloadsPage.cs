using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGDownloadsPage", GUID = "B2888315-1484-4956-B9D5-10957A2C649F", GroupName = "Hospitality")]
    public class HBGDownloadsPage : HBGBasePage
    {
        [Display(Name = "Date", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual DateTime Date { get; set; }

        [Display(Name = "Image", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Image { get; set; }

        [Display(Name = "Source", GroupName = "Content", Order = 400)]
        [CultureSpecific]
        public virtual string Source { get; set; }

        [Display(Name = "File", GroupName = "Content", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.MediaFile)]
        public virtual ContentReference File { get; set; }

        [Display(Name = "External Url", GroupName = "Content", Order = 600)]
        [CultureSpecific]
        public virtual LinkItem ExternalUrl { get; set; }

        [Display(Name = "DownLoadText", GroupName = "Content", Order = 700)]
        [CultureSpecific]
        public virtual string DownLoadText { get; set; }

        [Display(Name = "Location", GroupName = "Content", Order = 800)]
        [CultureSpecific]
        public virtual ContentReference Location { get; set; }

    }
}
