using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGLinkBlock", GUID = "EBB562B5-44C5-4CA6-9367-56EA19B25BD5", GroupName = "Hospitality")]
    public class HBGLinkBlock : HBGRootBlock
    {
        [Display(Name = "Link", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual LinkItem Link { get; set; }

    }
}
