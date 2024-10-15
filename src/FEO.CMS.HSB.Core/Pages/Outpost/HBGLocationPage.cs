using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Pages.Outpost
{
    [ContentType(DisplayName = "HBGLocationPage", GUID = "FD858DF3-3E1C-4970-934D-B42D9E9A2D7E", GroupName = "Hospitality")]
    public class HBGLocationPage : HBGBasePage
    {
        [Display(Name = "Address Title", GroupName = "Address", Order = 100)]
        [CultureSpecific]
        public virtual string AddressTitle { get; set; }

        [Display(Name = "Main Content Title", GroupName = "How To Get There", Order = 100)]
        [CultureSpecific]
        public virtual string MainContentTitle { get; set; }

        [Display(Name = "Near By Title", GroupName = "Near By", Order = 100)]
        [CultureSpecific]
        public virtual string NearByTitle { get; set; }

        [Display(Name = "Address", GroupName = "Address", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Address { get; set; }

        [Display(Name = "Main Content", GroupName = "How To Get There", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString MainContent { get; set; }

        [Display(Name = "Near By Items", GroupName = "Near By", Order = 200)]
        [CultureSpecific]
        public virtual ContentArea NearByItems { get; set; }

        [Display(Name = "Link", GroupName = "Address", Order = 300)]
        [CultureSpecific]
        public virtual string Link { get; set; }

        [Display(Name = "Map IFrame URL", GroupName = "Address", Order = 500)]
        [CultureSpecific]
        public virtual string MapIFrameURL { get; set; }

    }
}
