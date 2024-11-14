using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGBackgroundVideoBlock", GUID = "E4624567-5266-47F8-A516-0982D13A7D26", GroupName = "Hospitality")]
    public class HBGBackgroundVideoBlock : HBGBannerImagesBlock
    {
        [Display(Name = "Background Video", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual LinkItem BackgroundVideo { get; set; }

    }
}
