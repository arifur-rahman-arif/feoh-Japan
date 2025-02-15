using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGOutPostHighLightContainerBlock", GUID = "20BDDD32-6A7E-4194-9ACD-B93B1832BB33", GroupName = "Hospitality")]
    public class HBGOutPostHighLightContainerBlock : HBGBaseBlock
    {
        [Display(Name = "Background Colors", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference BackgroundColors { get; set; }

        [Display(Name = "ComponentID", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual ContentReference ComponentID { get; set; }

        [Display(Name = "ComponentClass", GroupName = SystemTabNames.Settings, Order = 300)]
        [CultureSpecific]
        public virtual ContentReference ComponentClass { get; set; }

        [Display(Name = "Title Image", GroupName = SystemTabNames.Settings, Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference TitleImage { get; set; }

        [Display(Name = "Background Image", GroupName = SystemTabNames.Settings, Order = 600)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BackgroundImage { get; set; }

        [Display(Name = "SubTitle", GroupName = SystemTabNames.Settings, Order = 700)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

    }
}
