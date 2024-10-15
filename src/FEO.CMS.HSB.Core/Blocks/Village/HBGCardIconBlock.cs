using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGCardIconBlock", GUID = "2DFBC44C-FC21-4E1B-84D0-83B7DE647ED5", GroupName = "Hospitality")]
    public class HBGCardIconBlock : HBGBaseBlock
    {
        [Display(Name = "Name", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string Name { get; set; }

        [Display(Name = "Icon", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Icon { get; set; }

    }
}
