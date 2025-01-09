using EPiServer.Forms.Core.PostSubmissionActor;
using EPiServer.Shell.ObjectEditing;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Models.Forms
{
    public class HBGCRMFormActorModel : IPostSubmissionActorModel, ICloneable
    {
        [Display(Name = "Actor Type", Order = 101)]
        [SelectOne(SelectionFactoryType = typeof(CustomActorTypeFactory))]
        public virtual string ActorType { get; set; }
        public object Clone()
        {
            return new HBGCRMFormActorModel
            {
                ActorType = this.ActorType
            };
        }

        private class CustomActorTypeFactory : ISelectionFactory
        {
            public IEnumerable<ISelectItem> GetSelections(ExtendedMetadata metadata)
            {
                return new ISelectItem[]
                {
                new SelectItem() { Text = "Send Email", Value = "SendEmail" },
                new SelectItem() { Text = "Send Property Email", Value = "SendPropertyEmail" }
                };
            }
        }
    }
}
