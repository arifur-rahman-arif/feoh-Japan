using EPiServer.Core;
using EPiServer.DataAnnotations;
using EPiServer.SpecializedProperties;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGStayFarEastMapComponentBlock", GUID = "03A58B74-DAF2-48B8-A6F0-6C89226127FF", GroupName = "Hospitality")]
    public class HBGStayFarEastMapComponentBlock : HBGBaseBlock
    {
        [Display(Name = "Title", GroupName = "Map Settings", Order = 100)]
        [CultureSpecific]
        public virtual string Title { get; set; }

        [Display(Name = "SubTitle", GroupName = "Map Settings", Order = 200)]
        [CultureSpecific]
        public virtual string SubTitle { get; set; }

        [Display(Name = "Url", GroupName = "Map Settings", Order = 250)]
        [CultureSpecific]
        public virtual string Url { get; set; }

        [Display(Name = "ApiKey", GroupName = "Map Settings", Order = 300)]
        [CultureSpecific]
        public virtual string ApiKey { get; set; }

        [Display(Name = "Latitude", GroupName = "Map Settings", Order = 400)]
        [CultureSpecific]
        public virtual string Latitude { get; set; }

        [Display(Name = "Longitude", GroupName = "Map Settings", Order = 500)]
        [CultureSpecific]
        public virtual string Longitude { get; set; }

        [Display(Name = "DesktopZoomLevel", GroupName = "Map Settings", Order = 700)]
        [CultureSpecific]
        public virtual string DesktopZoomLevel { get; set; }

        [Display(Name = "TabletZoomLevel", GroupName = "Map Settings", Order = 800)]
        [CultureSpecific]
        public virtual string TabletZoomLevel { get; set; }

        [Display(Name = "MobileZoomLevel", GroupName = "Map Settings", Order = 900)]
        [CultureSpecific]
        public virtual string MobileZoomLevel { get; set; }

        [Display(Name = "Icon", GroupName = "Map Settings", Order = 1000)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference Icon { get; set; }

        [Display(Name = "CityIcon", GroupName = "Map Settings", Order = 1050)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference CityIcon { get; set; }

        [Display(Name = "DragMessageIcon", GroupName = "Map Settings", Order = 1100)]
        [CultureSpecific]
        [UIHint(UIHint.Image)]
        public virtual ContentReference DragMessageIcon { get; set; }

        [Display(Name = "SeeAllProperty", GroupName = "Map Settings", Order = 1200)]
        [CultureSpecific]
        public virtual LinkItem SeeAllProperty { get; set; }

    }
}
