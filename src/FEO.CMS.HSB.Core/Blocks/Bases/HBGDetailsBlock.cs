using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGDetailsBlock", GUID = "86019B31-E402-4DB2-BC40-EDE616F8112E", GroupName = "Hospitality")]
    public class HBGDetailsBlock : HBGBaseBlock
    {
        [Display(Name = "Short Summary", GroupName = "Basic Info", Order = 100)]
        [CultureSpecific]
        public virtual string ShortSummary { get; set; }

    }
}
