using EPiServer.Forms.Implementation.Elements;
using EPiServer.Web;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Business.Forms.FormFields
{
    [ContentType(DisplayName = "HBG Text Area", GUID = "01203e47-5901-44b0-9841-edda5dc5efaa", GroupName = "HBG Form Elements", Order = 2230)]
    public class HBGTextareaElementBlock : TextareaElementBlock
    {
        /// <summary>
        /// Sets default values for the `HBGTextareaElementBlock` when a new instance is created.
        /// Invokes the base implementation while allowing additional default configuration if needed.
        /// </summary>
        /// <param name="contentType">The content type being initialized.</param>
        public override void SetDefaultValues(ContentType contentType)
        {
            base.SetDefaultValues(contentType);
        }

        [Display(
                Description = "Label Css Class",
                GroupName = SystemTabNames.Content,
                Order = 200)]
        public virtual string LabelCss { get; set; }

        [Display(
        Description = "Field Css Class",
        GroupName = SystemTabNames.Content,
        Order = 300)]
        public virtual string FieldCss { get; set; }
    }
}
