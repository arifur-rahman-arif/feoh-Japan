using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGContactBlock", GUID = "4250F965-5028-4EBA-8FBA-D28A1D2BFE27", GroupName = "Hospitality")]
    public class HBGContactBlock : HBGBaseBlock
    {
        [Display(Name = "Contact Number", GroupName = "Profile", Order = 100)]
        [CultureSpecific]
        public virtual string ContactNumber { get; set; }

        [Display(Name = "Email Address", GroupName = "Profile", Order = 200)]
        [CultureSpecific]
        public virtual LinkItem EmailAddress { get; set; }

    }
}
