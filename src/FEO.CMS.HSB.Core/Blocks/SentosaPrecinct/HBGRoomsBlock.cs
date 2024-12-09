using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.SentosaPrecinct
{
    [ContentType(DisplayName = "HBGRoomsBlock", GUID = "1B17707C-2D45-4995-B561-4F20A572735D", GroupName = "Hospitality")]
    public class HBGRoomsBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = "Section", Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "Full Day Package", GroupName = "Section", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString FullDayPackage { get; set; }

        [Display(Name = "Half Day Package", GroupName = "Section", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString HalfDayPackage { get; set; }

        [Display(Name = "Floor Plan Sub Heading", GroupName = "Section", Order = 600)]
        [CultureSpecific]
        public virtual string FloorPlanSubHeading { get; set; }

    }
}
