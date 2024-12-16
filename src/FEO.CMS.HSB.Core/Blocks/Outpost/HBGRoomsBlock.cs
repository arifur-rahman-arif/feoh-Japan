using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Outpost
{
    [ContentType(DisplayName = "HBGRoomsBlock", GUID = "DA73EF4B-0B17-4919-B546-1E7F25E5B9DC", GroupName = "Hospitality")]
    public class HBGRoomsBlock : HBGBaseBlock
    {
        [Display(Name = "Enable Link", GroupName = SystemTabNames.Settings, Order = 100)]
        [CultureSpecific]
        public virtual bool EnableLink { get; set; }

        [Display(Name = "Large Thumbnail Image", GroupName = "Section", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference LargeThumbnailImage { get; set; }

        [Display(Name = "Thumbnail Image Mobile", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ThumbnailImageMobile { get; set; }

        [Display(Name = "HighlightImageMobileOne", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference HighlightImageMobileOne { get; set; }

        [Display(Name = "Room Amenities", GroupName = "Section", Order = 200)]
        [CultureSpecific]
        public virtual string RoomAmenities { get; set; }

        [Display(Name = "ShowAsRoomHighlighter", GroupName = SystemTabNames.Settings, Order = 200)]
        [CultureSpecific]
        public virtual bool ShowAsRoomHighlighter { get; set; }

        [Display(Name = "HighlightImageDesktopOne", GroupName = "Images", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference HighlightImageDesktopOne { get; set; }

        [Display(Name = "Medium Thumbnail Image", GroupName = "Section", Order = 300)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference MediumThumbnailImage { get; set; }

        [Display(Name = "ShowSeries", GroupName = SystemTabNames.Settings, Order = 300)]
        [CultureSpecific]
        public virtual bool ShowSeries { get; set; }

        [Display(Name = "About the Room", GroupName = "Section", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString AbouttheRoom { get; set; }

        [Display(Name = "HighlightImageTabletOne", GroupName = "Images", Order = 400)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference HighlightImageTabletOne { get; set; }

        [Display(Name = "Border Emblem", GroupName = "Section", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference BorderEmblem { get; set; }

        [Display(Name = "HighlightImageMobileTwo", GroupName = "Images", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference HighlightImageMobileTwo { get; set; }

        [Display(Name = "HighlightImageDesktopTwo", GroupName = "Images", Order = 600)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference HighlightImageDesktopTwo { get; set; }

        [Display(Name = "SeriesText", GroupName = "Section", Order = 600)]
        [CultureSpecific]
        public virtual string SeriesText { get; set; }

        [Display(Name = "HighlightHeading", GroupName = "Section", Order = 700)]
        [CultureSpecific]
        public virtual string HighlightHeading { get; set; }

        [Display(Name = "HighlightImageTabletTwo", GroupName = "Images", Order = 700)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference HighlightImageTabletTwo { get; set; }

        [Display(Name = "HighlightDescription", GroupName = "Section", Order = 800)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString HighlightDescription { get; set; }

        [Display(Name = "HighlightButtonText", GroupName = "Section", Order = 900)]
        [CultureSpecific]
        public virtual string HighlightButtonText { get; set; }

    }
}
