using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGImageBlock", GUID = "904B4438-B214-4689-8453-C5593B951355", GroupName = "Hospitality")]
    public class HBGImageBlock : HBGBaseBlock
    {
        [Display(Name = "Desktop Image", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference DesktopImage { get; set; }

        [Display(Name = "Mobile Image", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference MobileImage { get; set; }

        [Display(Name = "Image URL", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual LinkItem ImageURL { get; set; }

        [Display(Name = "Tablet Image", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference TabletImage { get; set; }

    }
}
