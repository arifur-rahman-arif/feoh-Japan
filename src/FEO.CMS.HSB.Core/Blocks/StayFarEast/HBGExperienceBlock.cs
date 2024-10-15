using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGExperienceBlock", GUID = "CB9FD70A-7F35-4656-AB32-435279DFEA01", GroupName = "Hospitality")]
    public class HBGExperienceBlock : HBGBaseBlock
    {
        [Display(Name = "Image Caption", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        public virtual string ImageCaption { get; set; }

        [Display(Name = "Image Icon", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ImageIcon { get; set; }

        [Display(Name = "Icon Title", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string IconTitle { get; set; }

        [Display(Name = "Button Copy", GroupName = "Content", Order = 300)]
        [CultureSpecific]
        public virtual string ButtonCopy { get; set; }

    }
}
