using EPiServer.Core;
using EPiServer.Framework.DataAnnotations;

namespace FEO.CMS.HBG.Core.Media;

[MediaDescriptor(ExtensionString = "jpg,jpeg,jpe,ico,gif,bmp,png,webp,jfif,tiff,tif")]
public class ImageFile : ImageData
{
    /// <summary>
    /// Gets or sets the copyright.
    /// </summary>
    /// <value>
    /// The copyright.
    /// </value>
    public virtual string Copyright { get; set; }

    /// <summary>
    /// Gets or sets the copyright.
    /// </summary>
    /// <value>
    /// The copyright.
    /// </value>
    public virtual string AltText { get; set; }
    public virtual string Title { get; set; }
    public virtual string Description { get; set; }
    public virtual string Width { get; set; }
    public virtual string Height { get; set; }

}
