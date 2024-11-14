using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{

    [ContentType(DisplayName = "Dictionary entry", GUID = "6D1CD897-1936-4A3A-A511-289A94C2A7B1", GroupName = "Dictionary")]
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
