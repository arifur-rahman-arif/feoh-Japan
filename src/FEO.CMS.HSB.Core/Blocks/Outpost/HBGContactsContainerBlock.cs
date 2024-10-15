using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGContactsContainerBlock", GUID = "5B38C3C4-029D-4E13-90FD-708B45D08A18", GroupName = "Hospitality")]
    public class HBGContactsContainerBlock : HBGBaseBlock
    {
        [Display(Name = "DesktopBackgroundImage", GroupName = "BackgroundImages", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference DesktopBackgroundImage { get; set; }

        [Display(Name = "Contact", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual string Contact { get; set; }

        [Display(Name = "TabletBackgroundImage", GroupName = "BackgroundImages", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference TabletBackgroundImage { get; set; }

        [Display(Name = "Email Address", GroupName = "Settings", Order = 250)]
        [CultureSpecific]
        public virtual LinkItem EmailAddress { get; set; }

        [Display(Name = "MobileBackgroundImage", GroupName = "BackgroundImages", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference MobileBackgroundImage { get; set; }

        [Display(Name = "ProposalImage", GroupName = "Settings", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ProposalImage { get; set; }

        [Display(Name = "ContactImage", GroupName = "Settings", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ContactImage { get; set; }

    }
}
