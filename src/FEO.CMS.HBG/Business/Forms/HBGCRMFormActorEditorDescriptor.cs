using EPiServer.Cms.Shell.UI.ObjectEditing.EditorDescriptors;
using EPiServer.Forms.EditView;
using EPiServer.Framework.DataAnnotations;
using EPiServer.PlugIn;
using EPiServer.Shell.ObjectEditing.EditorDescriptors;
using FEO.CMS.HBG.Models.Forms;

namespace FEO.CMS.HBG.Business.Forms
{
    [EditorDescriptorRegistration(TargetType = typeof(IEnumerable<HBGCRMFormActorModel>), UIHint = "ConfigurableActorPropertyHint")]
    public class HBGCRMFormActorEditorDescriptor : CollectionEditorDescriptor<HBGCRMFormActorModel>
    {
        public HBGCRMFormActorEditorDescriptor()
        {
            ClientEditingClass = "epi-forms/contentediting/editors/CollectionEditor";
        }
    }

    [EditorHint("ConfigurableActorPropertyHint")]
    [PropertyDefinitionTypePlugIn(DisplayName = "ConfigurableActorProp")]
    public class PropertyForDisplayingHBGCRMFormActor : PropertyGenericList<HBGCRMFormActorModel>
    {
    }
}
