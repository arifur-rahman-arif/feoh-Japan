using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks.Bases;
using FEO.CMS.HBG.Core.Media;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGImageTextGridItemBlock", GUID = "4A8A4356-10BE-4901-AE53-F87806ADB5DA", GroupName = "Hospitality")]
    public class HBGImageTextGridItemBlock : HBGCTAOneSettingBlock
    {
        [Display(Name = "USP Category", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string USPCategory { get; set; }

        [Display(Name = "Preview Images", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [AllowedTypes(AllowedTypes = new[] { typeof(ImageFile) })]
        public virtual ContentArea PreviewImages { get; set; }

        [Display(Name = "Image Caption", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual string ImageCaption { get; set; }

    }
}
