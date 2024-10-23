using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGInstagramBlock", GUID = "8A8AC62D-9023-4A0E-86AE-293E9573A812", GroupName = "Hospitality")]
    public class HBGInstagramBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = SystemTabNames.Content, Order = 50)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Access Token", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual string AccessToken { get; set; }

        [Display(Name = "Number of Images to show", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        public virtual string NumberofImagestoshow { get; set; }

        [Display(Name = "Hash Tag", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual string HashTag { get; set; }

        [Display(Name = "JuicerData", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString JuicerData { get; set; }

        [Display(Name = "Subtitle", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Subtitle { get; set; }

    }
}
