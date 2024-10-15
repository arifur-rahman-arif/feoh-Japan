using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGInputFieldItemBlock", GUID = "E9F08926-3C3A-45C6-BAFF-1E921FF6D79A", GroupName = "Hospitality")]
    public class HBGInputFieldItemBlock : HBGBaseBlock
    {
        [Display(Name = "Name", GroupName = "Data", Order = 50)]
        [CultureSpecific]
        public virtual string Name { get; set; }

        [Display(Name = "Title", GroupName = "Data", Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Required", GroupName = "Data", Order = 200)]
        [CultureSpecific]
        public virtual bool Required { get; set; }

        [Display(Name = "Require Message", GroupName = "Data", Order = 300)]
        [CultureSpecific]
        public virtual string RequireMessage { get; set; }

        [Display(Name = "Invalid Message", GroupName = "Data", Order = 400)]
        [CultureSpecific]
        public virtual string InvalidMessage { get; set; }

    }
}
