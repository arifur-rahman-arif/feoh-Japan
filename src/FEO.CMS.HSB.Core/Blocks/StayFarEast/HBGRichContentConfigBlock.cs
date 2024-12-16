using EPiServer.Core;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGRichContentConfigBlock", GUID = "C973858E-F282-4092-91BF-AD43007015D9", GroupName = "Hospitality")]
    public class HBGRichContentConfigBlock : HBGBaseBlock
    {
        [Display(Name = "Column Span Size", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual ContentReference ColumnSpanSize { get; set; }

        [Display(Name = "Remove Content Padding", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual bool RemoveContentPadding { get; set; }

        [Display(Name = "Remove Padding", GroupName = SystemTabNames.Settings, Order = 300)]
        [CultureSpecific]
        public virtual bool RemovePadding { get; set; }

        [Display(Name = "Show Header Divider", GroupName = SystemTabNames.Settings, Order = 400)]
        [CultureSpecific]
        public virtual bool ShowHeaderDivider { get; set; }

        [Display(Name = "Show Title", GroupName = SystemTabNames.Settings, Order = 500)]
        [CultureSpecific]
        public virtual bool ShowTitle { get; set; }

        [Display(Name = "Use Text Placeholders", GroupName = SystemTabNames.Settings, Order = 600)]
        [CultureSpecific]
        public virtual bool UseTextPlaceholders { get; set; }

    }
}
