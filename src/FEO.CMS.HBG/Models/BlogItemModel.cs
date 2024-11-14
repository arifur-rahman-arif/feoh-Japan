using EPiServer.SpecializedProperties;

namespace FEO.CMS.HBG.Models
{
    public class BlogItemModel
    {
        public string Title { get; set; }
        public string Summary { get; set; }
        public string SmallThumbnail { get; set; }
        public string MediumThumbnail { get; set; }
        public string LargeThumbnail { get; set; }
        public string Url { get; set; }
        public LinkItem AlternateUrl { get; set; }
        public string Tags { get; set; }
    }
}
