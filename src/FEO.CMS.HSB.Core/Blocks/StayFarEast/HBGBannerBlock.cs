using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGBannerBlock", GUID = "9C294E22-AEB3-4343-A4CD-0E111CD52C40", GroupName = "Hospitality")]
    public class HBGBannerBlock : HBGBannerConfigBlock
    {
        [Display(Name = "Caption", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual string Caption { get; set; }

        [Display(Name = "Poster", GroupName = Globals.GroupNames.Images, Order = 150)]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Poster { get; set; }

        [Display(Name = "Poster For Mobile", GroupName = Globals.GroupNames.Images, Order = 200)]
        [UIHint(UIHint.Image)]
        public virtual ContentReference PosterForMobile { get; set; }

        [Display(Name = "Autoplay", GroupName = SystemTabNames.Settings, Order = 300)]
        public virtual bool Autoplay { get; set; }

        [Display(Name = "Embed as Background", GroupName = SystemTabNames.Settings, Order = 400)]
        public virtual bool EmbedAsBackground { get; set; }

        [Display(Name = "Has Controls", GroupName = SystemTabNames.Settings, Order = 500)]
        public virtual bool HasControls { get; set; }

        [Display(Name = "Height", GroupName = SystemTabNames.Settings, Order = 600)]
        public virtual int Height { get; set; }

        [Display(Name = "Is Loop", GroupName = SystemTabNames.Settings, Order = 700)]
        public virtual bool IsLoop { get; set; }

        [Display(Name = "Mute", GroupName = SystemTabNames.Settings, Order = 800)]
        public virtual bool Mute { get; set; }

        [Display(Name = "Width", GroupName = SystemTabNames.Settings, Order = 900)]
        public virtual int Width { get; set; }

    }
}
