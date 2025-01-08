using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{

    [ContentType(DisplayName = "Dictionary entry", GroupName = "Dictionary", GUID = "48c5973b-2c56-4948-89e9-e2bb54e2a319")]
    public class HBGDictionaryEntryBlock : HBGBaseBlock
    {
        [Display(Name = "Key", GroupName = "Data", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        [Searchable]
        public virtual XhtmlString Key { get; set; }

        [Display(Name = "Phrase", GroupName = "Data", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Phrase { get; set; }
    }
}
