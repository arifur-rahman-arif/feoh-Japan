using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGPOIContainerBlock", GUID = "B3694DCA-91CC-4F42-9D6B-A5EC5539FE10", GroupName = "Hospitality")]
    public class HBGPOIContainerBlock : HBGPOIBlock
    {
        [Display(Name = "ChildrenFolderReference", GroupName = SystemTabNames.Content, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference ChildrenFolderReference { get; set; }

    }

}
