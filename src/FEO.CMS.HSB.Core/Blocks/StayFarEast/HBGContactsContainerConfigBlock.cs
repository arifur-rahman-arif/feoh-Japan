using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGContactsContainerConfigBlock", GUID = "E415034D-DBAF-4F99-BD10-AB2000992AD7", GroupName = "Hospitality")]
    public class HBGContactsContainerConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Column Span Size", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference ColumnSpanSize { get; set; }

        [Display(Name = "Inherit Parent Container", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual bool InheritParentContainer { get; set; }

    }
}
