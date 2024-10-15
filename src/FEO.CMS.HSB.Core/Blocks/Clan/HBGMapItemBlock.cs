using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Clan
{
    [ContentType(DisplayName = "HBGMapItemBlock", GUID = "8C6B5A2E-7BAE-4D5D-A71F-8EA30F8143EF", GroupName = "Hospitality")]
    public class HBGMapItemBlock : HBGBaseBlock
    {
        [Display(Name = "Latitude", GroupName = "Map Item Settings", Order = 100)]
        [CultureSpecific]
        public virtual string Latitude { get; set; }

        [Display(Name = "Longitude", GroupName = "Map Item Settings", Order = 200)]
        [CultureSpecific]
        public virtual string Longitude { get; set; }

        [Display(Name = "PlaceId", GroupName = "Map Item Settings", Order = 300)]
        [CultureSpecific]
        public virtual string PlaceId { get; set; }

        [Display(Name = "Category", GroupName = "Map Item Settings", Order = 400)]
        [CultureSpecific]
        public virtual ContentReference Category { get; set; }

        [Display(Name = "Icon", GroupName = "Map Item Settings", Order = 500)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Icon { get; set; }

        [Display(Name = "Title", GroupName = "Map Item Settings", Order = 600)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "SubTitle", GroupName = "Map Item Settings", Order = 700)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

        [Display(Name = "DescriptionInList", GroupName = "Map Item Settings", Order = 800)]
        [CultureSpecific]
        public virtual string DescriptionInList { get; set; }

        [Display(Name = "Description", GroupName = "Map Item Settings", Order = 900)]
        [CultureSpecific]
        public virtual string Description { get; set; }

        [Display(Name = "Distance", GroupName = "Map Item Settings", Order = 1000)]
        [CultureSpecific]
        public virtual string Distance { get; set; }

        [Display(Name = "DistanceByWalkInMinutes", GroupName = "Map Item Settings", Order = 1100)]
        [CultureSpecific]
        public virtual string DistanceByWalkInMinutes { get; set; }

        [Display(Name = "DistanceByCarInMinutes", GroupName = "Map Item Settings", Order = 1200)]
        [CultureSpecific]
        public virtual string DistanceByCarInMinutes { get; set; }

        [Display(Name = "Address", GroupName = "Map Item Settings", Order = 1300)]
        [CultureSpecific]
        public virtual string Address { get; set; }

        [Display(Name = "Hours", GroupName = "Map Item Settings", Order = 1400)]
        [CultureSpecific]
        public virtual string Hours { get; set; }

        [Display(Name = "Phone", GroupName = "Map Item Settings", Order = 1500)]
        [CultureSpecific]
        public virtual string Phone { get; set; }

        [Display(Name = "SiteUrl", GroupName = "Map Item Settings", Order = 1600)]
        [CultureSpecific]
        public virtual string SiteUrl { get; set; }

        [Display(Name = "Summary", GroupName = "Map Item Settings", Order = 1700)]
        [CultureSpecific]
        [UIHint(UIHint.Textarea)]
        public virtual XhtmlString Summary { get; set; }

        [Display(Name = "ButtonLink", GroupName = "Map Item Settings", Order = 1800)]
        [CultureSpecific]
        public virtual LinkItem ButtonLink { get; set; }

        [Display(Name = "Thumbnail", GroupName = "Map Item Settings", Order = 1900)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Thumbnail { get; set; }

        [Display(Name = "HoverImage", GroupName = "Map Item Settings", Order = 1950)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference HoverImage { get; set; }

        [Display(Name = "ImageLarge", GroupName = "Map Item Settings", Order = 2000)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference ImageLarge { get; set; }

        [Display(Name = "MapImage", GroupName = "Map Item Settings", Order = 2100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference MapImage { get; set; }

    }
}
