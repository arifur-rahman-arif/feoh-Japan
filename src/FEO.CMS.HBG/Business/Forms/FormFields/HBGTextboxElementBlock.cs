using EPiServer.Forms.Implementation.Elements;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Business.Forms.FormFields
{
    [ContentType(DisplayName = "HBG Text", GUID = "df62e2a1-c390-438b-a7bd-40ffd76a11b2", GroupName = "HBG Form Elements", Order = 2230)]
    public class HBGTextboxElementBlock : TextboxElementBlock
    {
        /// <summary>
        /// Sets default values for the `HBGTextboxElementBlock` when a new instance is created.
        /// Calls the base implementation to ensure standard defaults are applied.
        /// </summary>
        /// <param name="contentType">The content type being initialized.</param>
        public override void SetDefaultValues(ContentType contentType)
        {
            base.SetDefaultValues(contentType);
        }

        [Display(
                Description = "Row Css Class",
                GroupName = SystemTabNames.Content,
                Order = 100)]
        public virtual string RowCss { get; set; }

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
