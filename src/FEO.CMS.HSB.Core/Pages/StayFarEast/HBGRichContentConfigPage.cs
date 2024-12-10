using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EPiServer.Core;
using EPiServer.DataAnnotations;
using FEO.CMS.HBG.Core.Blocks;

namespace FEO.CMS.HBG.Core.Pages.StayFarEast
{
    [ContentType(DisplayName = "HBGRichContentConfigPage", GUID = "76B6F3A0-59BA-4DC2-BC2C-34320D82247A", GroupName = "Hospitality")]
    public class HBGRichContentConfigPage : HBGBasePage
    {
        [Display(Name = "Column Span Size", GroupName = "Settings", Order = 100)]
        [CultureSpecific]
        public virtual ContentReference ColumnSpanSize { get; set; }

        [Display(Name = "Remove Content Padding", GroupName = "Settings", Order = 200)]
        [CultureSpecific]
        public virtual bool RemoveContentPadding { get; set; }

        [Display(Name = "Remove Padding", GroupName = "Settings", Order = 300)]
        [CultureSpecific]
        public virtual bool RemovePadding { get; set; }

        [Display(Name = "Show Header Divider", GroupName = "Settings", Order = 400)]
        [CultureSpecific]
        public virtual bool ShowHeaderDivider { get; set; }

        [Display(Name = "Show Title", GroupName = "Settings", Order = 500)]
        [CultureSpecific]
        public virtual bool ShowTitle { get; set; }

        [Display(Name = "Use Text Placeholders", GroupName = "Settings", Order = 600)]
        [CultureSpecific]
        public virtual bool UseTextPlaceholders { get; set; }

        public virtual bool AsStandAloneComponent { get; set; }
    }
}
