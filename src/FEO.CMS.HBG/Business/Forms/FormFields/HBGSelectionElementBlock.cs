using EPiServer.Forms.Implementation.Elements;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Business.Forms.FormFields
{
    [ContentType(DisplayName = "HBG Selection", GUID = "f8ea1e51-9473-4086-af4a-f01c373a0295", GroupName = "HBG Form Elements", Order = 2230)]
    public class HBGSelectionElementBlock : SelectionElementBlock
    {
        /// <summary>
        /// Sets default values for the `HBGSelectionElementBlock` when it is created.
        /// Inherits default behavior from the base class while allowing for customization.
        /// </summary>
        /// <param name="contentType">The content type being initialized.</param>
        public override void SetDefaultValues(ContentType contentType)
        {
            base.SetDefaultValues(contentType);
        }
        /// <summary>
        /// Performs self-validation on the submitted value for the selection element.
        /// Ensures that the submitted value matches the predefined options or applies custom validation logic.
        /// </summary>
        /// <param name="validationMessage">An output parameter containing the validation message if the validation fails.</param>
        /// <returns>
        /// A boolean value indicating the validation status:
        /// - `true`: Validation passed.
        /// - `false`: Validation failed.
        /// - `null`: No validation applied.
        /// </returns>
        public override bool? SelfValidate(out string validationMessage)
        {
            IEnumerable<string> preConfiguredValues = null;
            var submittedValue = GetSubmittedValue();

            bool? isValid = CheckSelectionElementForUnexpectedValues(submittedValue, preConfiguredValues, AllowMultiSelect, new string[1] { "," }, out validationMessage);

            if (isValid == false)
            {
                validationMessage = "Alien values are allowed.";
                isValid = true;
            }

            return isValid;
        }

        [Display(
        Description = "Default Selection",
        GroupName = SystemTabNames.Content,
        Order = 100)]
        public virtual string DefaultSelection { get; set; }

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

        [Display(
        Description = "Custom List Datasource",
        GroupName = SystemTabNames.Content,
        Order = 400)]
        public virtual ContentReference CustomList { get; set; }
    }
}
