using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGPreviewsContainerBlock", GUID = "04207811-4D7B-4448-A32E-40D1CE5B49A1", GroupName = "Hospitality")]
    public class HBGPreviewsContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Hotel Previews", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual ContentArea HotelPreviews { get; set; }

        [Display(Name = "Our Hotels Button Text", GroupName = "Buttons", Order = 100)]
        [CultureSpecific]
        public virtual string OurHotelsButtonText { get; set; }

        [Display(Name = "Preview Count", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual double PreviewCount { get; set; }

        [Display(Name = "Our Hotels Mobile Button Text", GroupName = "Buttons", Order = 200)]
        [CultureSpecific]
        public virtual string OurHotelsMobileButtonText { get; set; }

        [Display(Name = "Serviced Residence Previews", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual ContentArea ServicedResidencePreviews { get; set; }

        [Display(Name = "Our Serviced Residences Button Text", GroupName = "Buttons", Order = 300)]
        [CultureSpecific]
        public virtual string OurServicedResidencesButtonText { get; set; }

        [Display(Name = "Our Serviced Residences Mobile Button Text", GroupName = "Buttons", Order = 400)]
        [CultureSpecific]
        public virtual string OurServicedResidencesMobileButtonText { get; set; }

        [Display(Name = "Show All Hotels Link", GroupName = "Buttons", Order = 500)]
        [CultureSpecific]
        public virtual LinkItem ShowAllHotelsLink { get; set; }

        [Display(Name = "Show All Serviced Residences Link", GroupName = "Buttons", Order = 600)]
        [CultureSpecific]
        public virtual LinkItem ShowAllServicedResidencesLink { get; set; }

    }
}
