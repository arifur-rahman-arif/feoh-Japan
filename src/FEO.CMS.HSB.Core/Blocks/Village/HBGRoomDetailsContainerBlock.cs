using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Village
{
    [ContentType(DisplayName = "HBGRoomDetailsContainerBlock", GUID = "8A81CB81-274C-4E6B-AA1D-AC11EE67525C", GroupName = "Hospitality")]
    public class HBGRoomDetailsContainerBlock : HBGBaseBlock
    {
        [Display(Name = "What You Will Get", GroupName = "Settings", Order = 50)]
        [CultureSpecific]
        public virtual string WhatYouWillGet { get; set; }

        [Display(Name = "Amenities", GroupName = "Settings", Order = 250)]
        [CultureSpecific]
        public virtual string Amenities { get; set; }

        [Display(Name = "Close", GroupName = "Settings", Order = 550)]
        [CultureSpecific]
        public virtual string Close { get; set; }

    }
}
