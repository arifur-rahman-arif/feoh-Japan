using EPiServer.Forms.Core;
using EPiServer.Forms.Core.Models;
using EPiServer.Forms.Implementation;
using EPiServer.ServiceLocation;

namespace FEO.CMS.HBG.Business.Forms
{
    /// <summary>
    /// Remove information to the redirection url when navigating to "Thank you page" after submitting Form.
    /// </summary>
    [ServiceConfiguration(typeof(IAppendExtraInfoToRedirection))]
    public class AppendFormInfoToRedirect : DefaultAppendExtraInfoToRedirection
    {
        /// <summary>
        /// This method is responsible for appending additional form-related information 
        /// to the redirection URL after a form submission. It overrides the base class 
        /// method to provide custom behavior for appending extra information to the redirection.
        /// </summary>
        /// <param name="formIden">The identity of the form that was submitted, used to identify the form.</param>
        /// <param name="submission">The form submission object, which contains details of the submission.</param>
        /// <returns>
        /// Returns a dictionary of additional information to be appended to the redirection URL.
        /// In this case, an empty dictionary is returned, but it can be extended to include 
        /// relevant information such as form fields, submission ID, etc.
        /// </returns>
        public override IDictionary<string, object> GetExtraInfo(FormIdentity formIden, Submission submission)
        {
            return new Dictionary<string, object>();
        }
    }
}
