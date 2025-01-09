using EPiServer.Forms.Core.Data;
using EPiServer.Forms.Core.PostSubmissionActor.Internal;
using EPiServer.Forms.Core.PostSubmissionActor;
using EPiServer.Forms.EditView;
using EPiServer.ServiceLocation;
using FEO.CMS.HBG.Models.Forms;

namespace FEO.CMS.HBG.Business.Forms
{
    public class HBGCRMFormActor : PostSubmissionActorBase, IUIPropertyCustomCollection
    {
        private readonly Injected<IFormDataRepository> formDataRepository;
        public override object Run(object input)
        {
            var result = new SubmissionActorResult { CancelSubmit = false, ErrorMessage = string.Empty };
            var configs = (Model as IEnumerable<HBGCRMFormActorModel>);
            var submittedData = formDataRepository.Service.TransformSubmissionDataWithFriendlyName(SubmissionData.Data, SubmissionFriendlyNameInfos, true).ToList();

            if (configs.Any() && configs.Select(ap => ap.ActorType).FirstOrDefault() == "SendEmail") // Send Email
            {
                var nameData = GetValueByKey(submittedData, "name");
                result.CancelSubmit = true;
                result.ErrorMessage = "your message";
            }
            else if (configs.Any() && configs.Select(ap => ap.ActorType).FirstOrDefault() == "SendPropertyEmail") // Send Property Email
            {

            }
            else
            {
                return result;
            }
            return result;
        }

        public virtual Type PropertyType => typeof(PropertyForDisplayingHBGCRMFormActor);

        private string GetValueByKey(List<KeyValuePair<string, object>> list, string key)
        {
            var item = list.FirstOrDefault(kvp => kvp.Key == key);
            return item.Value?.ToString();
        }
    }

}
