using EPiServer.Core;
using EPiServer.Framework.Blobs;
using EPiServer.Framework.DataAnnotations;

namespace FEO.CMS.HBG.Models.Media
{
    [MediaDescriptor
        (ExtensionString = "svg"
        )]
    public class SvgFile : ImageData
    {
        // instead of generating a smaller bitmap file for thumbnail,
        // use the same binary vector image for thumbnail
        public override Blob Thumbnail { get => base.BinaryData; }
        public virtual string AltText { get; set; }
    }
}
