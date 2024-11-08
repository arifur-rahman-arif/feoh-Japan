using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGInclusionBlock", GUID = "A69219FD-AA78-4BCC-B281-D8AEDF585A6F", GroupName = "Hospitality")]
    public class HBGInclusionBlock : HBGBaseBlock
    {
        [Display(Name = "Inclusion Description", GroupName = SystemTabNames.Content, Order = 700)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString InclusionDescription { get; set; }

    }
}
