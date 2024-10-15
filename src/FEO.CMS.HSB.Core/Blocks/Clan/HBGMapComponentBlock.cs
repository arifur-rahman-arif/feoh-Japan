using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.Clan
{
    [ContentType(DisplayName = "HBGMapComponentBlock", GUID = "51452BE7-038F-46BC-9FBC-52C5A3C8CA01", GroupName = "Hospitality")]
    public class HBGMapComponentBlock : HBGBaseBlock
    {
        [Display(Name = "Url", GroupName = "Map Settings", Order = 100)]
        [CultureSpecific]
        public virtual string Url { get; set; }

        [Display(Name = "Latitude", GroupName = "Map Settings", Order = 200)]
        [CultureSpecific]
        public virtual string Latitude { get; set; }

        [Display(Name = "Longitude", GroupName = "Map Settings", Order = 300)]
        [CultureSpecific]
        public virtual string Longitude { get; set; }

        [Display(Name = "ApiKey", GroupName = "Map Settings", Order = 400)]
        [CultureSpecific]
        public virtual string ApiKey { get; set; }

        [Display(Name = "DesktopZoomLevel", GroupName = "Map Settings", Order = 500)]
        [CultureSpecific]
        public virtual string DesktopZoomLevel { get; set; }

        [Display(Name = "TabletZoomLevel", GroupName = "Map Settings", Order = 550)]
        [CultureSpecific]
        public virtual string TabletZoomLevel { get; set; }

        [Display(Name = "MobileZoomLevel", GroupName = "Map Settings", Order = 575)]
        [CultureSpecific]
        public virtual string MobileZoomLevel { get; set; }

        [Display(Name = "Logo", GroupName = "Map Settings", Order = 600)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Logo { get; set; }

        [Display(Name = "LocationTypeText", GroupName = "Map Settings", Order = 700)]
        [CultureSpecific]
        public virtual string LocationTypeText { get; set; }

        [Display(Name = "BackToMapText", GroupName = "Map Settings", Order = 800)]
        [CultureSpecific]
        public virtual string BackToMapText { get; set; }

        [Display(Name = "ExploreMoreText", GroupName = "Map Settings", Order = 900)]
        [CultureSpecific]
        public virtual string ExploreMoreText { get; set; }

        [Display(Name = "Icon", GroupName = "Map Settings", Order = 1000)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Icon { get; set; }

        [Display(Name = "Title", GroupName = "Map Settings", Order = 1100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

    }
}
