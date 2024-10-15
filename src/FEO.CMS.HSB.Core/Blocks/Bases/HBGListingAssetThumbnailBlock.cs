using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Bases
{
    [ContentType(DisplayName = "HBGListingAssetThumbnailBlock", GUID = "AF3D54B5-2E9C-458C-A8B0-20B2D7D85B09", GroupName = "Hospitality")]
    public class HBGListingAssetThumbnailBlock : HBGBaseBlock
    {
        [Display(Name = "Additional Info", GroupName = "Profile", Order = 100)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString AdditionalInfo { get; set; }

        [Display(Name = "Preview Images", GroupName = "Images", Order = 100)]
        [CultureSpecific]
        public virtual string PreviewImages { get; set; }

        [Display(Name = "Currency", GroupName = "Profile", Order = 200)]
        [CultureSpecific]
        public virtual ContentReference Currency { get; set; }

        [Display(Name = "Icon", GroupName = "Images", Order = 200)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Icon { get; set; }

        [Display(Name = "Maximum Number Of Guests", GroupName = "Profile", Order = 300)]
        [CultureSpecific]
        public virtual double MaximumNumberOfGuests { get; set; }

        [Display(Name = "Pillar", GroupName = "Images", Order = 300)]
        [CultureSpecific]
        public virtual string Pillar { get; set; }

        [Display(Name = "Preview Mobile Images", GroupName = "Images", Order = 400)]
        [CultureSpecific]
        public virtual string PreviewMobileImages { get; set; }

        [Display(Name = "Price", GroupName = "Profile", Order = 400)]
        [CultureSpecific]
        public virtual double Price { get; set; }

        [Display(Name = "Preview Ipad Images", GroupName = "Images", Order = 500)]
        [CultureSpecific]
        public virtual string PreviewIpadImages { get; set; }

        [Display(Name = "Size", GroupName = "Profile", Order = 500)]
        [CultureSpecific]
        public virtual string Size { get; set; }

        [Display(Name = "Tour URL", GroupName = "Profile", Order = 600)]
        [CultureSpecific]
        public virtual string TourURL { get; set; }

        [Display(Name = "Features", GroupName = "Profile", Order = 700)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Features { get; set; }

        [Display(Name = "Amenities", GroupName = "Profile", Order = 800)]
        [CultureSpecific]
        public virtual string Amenities { get; set; }

        [Display(Name = "Room Privileges", GroupName = "Profile", Order = 900)]
        [CultureSpecific]
        public virtual string RoomPrivileges { get; set; }

        [Display(Name = "Room Code", GroupName = "Profile", Order = 1000)]
        [CultureSpecific]
        public virtual string RoomCode { get; set; }

    }
}
