using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGNameValuePairBlock", GUID = "0FBFDDE4-EF62-499F-B0E6-9506A3946FE8", GroupName = "Hospitality")]
    public class HBGNameValuePairBlock : HBGBaseBlock
    {
        [Display(Name = "Name", GroupName = "Content", Order = 100)]
        [CultureSpecific]
        public virtual string Name { get; set; }

        [Display(Name = "Value", GroupName = "Content", Order = 200)]
        [CultureSpecific]
        public virtual string Value { get; set; }

    }
}
