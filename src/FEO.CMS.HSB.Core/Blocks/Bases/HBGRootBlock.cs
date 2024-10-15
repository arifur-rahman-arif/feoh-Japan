using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGRootBlock", GUID = "3CA0E21B-0951-4E80-BE13-E5BFD1729120", GroupName = "Hospitality")]
    public class HBGRootBlock : HBGBaseBlock
    {
        [Display(Name = "Description", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Description { get; set; }

        [Display(Name = "Summary", GroupName = "Basic Info", Order = 200)]
        [CultureSpecific]
        public virtual string Summary { get; set; }

        [Display(Name = "Title", GroupName = "Basic Info", Order = 300)]
        [CultureSpecific]
        public virtual string Title { get; set; }

    }
}
