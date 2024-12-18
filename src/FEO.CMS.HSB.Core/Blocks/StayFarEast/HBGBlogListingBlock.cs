using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGBlogListingBlock", GUID = "E5528295-1EB0-4B76-94DF-BD5EC8BE8F3A", GroupName = "Hospitality")]
    public class HBGBlogListingBlock : HBGBaseBlock
    {
        [Display(Name = "Page Size", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual int PageSize { get; set; }

        [Display(Name = "Title", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Page Size For Mobile", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual int PageSizeForMobile { get; set; }

    }
}
