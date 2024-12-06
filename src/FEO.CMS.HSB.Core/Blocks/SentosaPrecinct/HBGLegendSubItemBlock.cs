using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGLegendSubItemBlock", GUID = "2C67465E-254D-41DB-B1DC-B5967D221236", GroupName = "Hospitality")]
    public class HBGLegendSubItemBlock : HBGBaseBlock
    {
        [Display(Name = "Legend", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference Legend { get; set; }

        [Display(Name = "Coordinates", GroupName = SystemTabNames.Content, Order = 150)]
        [CultureSpecific]
        public virtual string Coordinates { get; set; }

        [Display(Name = "Walking Distance", GroupName = SystemTabNames.Content, Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString WalkingDistance { get; set; }

        [Display(Name = "Image", GroupName = SystemTabNames.Content, Order = 250)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Image { get; set; }

        [Display(Name = "Flag Alignment", GroupName = SystemTabNames.Content, Order = 300)]
        [CultureSpecific]
        public virtual ContentReference FlagAlignment { get; set; }

        [Display(Name = "Address", GroupName = SystemTabNames.Content, Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Address { get; set; }

        [Display(Name = "Nearest Station", GroupName = SystemTabNames.Content, Order = 500)]
        [CultureSpecific]
        public virtual string NearestStation { get; set; }

        [Display(Name = "Opening Hours", GroupName = SystemTabNames.Content, Order = 600)]
        [CultureSpecific]
        public virtual string OpeningHours { get; set; }

        [Display(Name = "Contact", GroupName = SystemTabNames.Content, Order = 700)]
        [CultureSpecific]
        public virtual string Contact { get; set; }

    }
}
