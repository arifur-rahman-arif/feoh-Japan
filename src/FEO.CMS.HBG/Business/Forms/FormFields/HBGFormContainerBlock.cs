using EPiServer.Forms.Core;
using EPiServer.Forms.Implementation.Elements;
using EPiServer.ServiceLocation;
using System.ComponentModel.DataAnnotations;

namespace FEO.CMS.HBG.Business.Forms.FormFields
{
    [ContentType(DisplayName = "HBG Form Container", GUID = "4e1620ee-35ae-41e7-addd-cc21f8466cc7", GroupName = "FormsContainerElements", Order = 4000)]
    [ServiceConfiguration(typeof(IFormContainerBlock))]
    public class HBGFormContainerBlock : FormContainerBlock
    {
        [Display(
        Description = "Css Class",
        GroupName = SystemTabNames.Content,
        Order = 100)]
        public virtual string FieldCss { get; set; }
    }
}
