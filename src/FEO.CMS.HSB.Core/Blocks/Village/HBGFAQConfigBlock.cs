using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGFAQConfigBlock", GUID = "2C3389EB-3814-477C-A67F-385A6377E08C", GroupName = "Hospitality")]
    public class HBGFAQConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Sub Title", GroupName = SystemTabNames.Settings, Order = 300)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

        [Display(Name = "Description", GroupName = SystemTabNames.Settings, Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Description { get; set; }

    }
}
