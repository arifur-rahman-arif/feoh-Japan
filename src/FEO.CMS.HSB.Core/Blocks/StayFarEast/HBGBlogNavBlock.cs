using EPiServer.Core;
using EPiServer.DataAnnotations;

namespace FEO.CMS.HBG.Core.Blocks.StayFarEast
{
    [ContentType(DisplayName = "HBGBlogNavBlock", GroupName = "Hospitality")]
    public class HBGBlogNavBlock : HBGBaseBlock
    {
        [Ignore]
        public IContent CurrentItem { get; set; }

        [Ignore]
        public virtual string PreviousItemUrl { get; set; }

        [Ignore]
        public virtual string PreviousItemTitle { get; set; }

        [Ignore]
        public virtual string NextItemUrl { get; set; }

        [Ignore]
        public virtual string NextItemTitle { get; set; }
    }
}
