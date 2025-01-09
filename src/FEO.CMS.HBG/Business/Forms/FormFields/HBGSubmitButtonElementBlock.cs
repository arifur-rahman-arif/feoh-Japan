using EPiServer.Forms.Implementation.Elements;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Business.Forms.FormFields
{
    [ContentType(DisplayName = "HBG Submit", GUID = "be6390ed-0eb1-49c1-bf15-ae8ed829d216", GroupName = "HBG Form Elements", Order = 2230)]
    public class HBGSubmitButtonElementBlock : SubmitButtonElementBlock
    {
        /// <summary>
        /// Sets default values for the `HBGSubmitButtonElementBlock` when it is created.
        /// Retains the default behavior of the base class while allowing for further customization if needed.
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
