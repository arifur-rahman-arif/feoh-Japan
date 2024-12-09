using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGNavBarConfigBlock", GUID = "66BC21F2-5441-4075-BF78-25F48B395EB3", GroupName = "Hospitality")]
    public class HBGNavBarConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Transparent NavBar", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual bool TransparentNavBar { get; set; }

    }
}
