using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGParticipatingPropertiesListingBlock", GUID = "14CA804B-96BB-4275-B08D-89B477EA0E3F", GroupName = "Hospitality")]
    public class HBGParticipatingPropertiesListingBlock : HBGBaseBlock
    {
        [Display(Name = "Ordering", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual ContentReference Ordering { get; set; }

    }
}
