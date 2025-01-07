using EPiServer.Forms.Controllers;
using EPiServer.Forms.Implementation.Elements;
using EPiServer.Framework.DataAnnotations;
using EPiServer.Framework.Web;
using FEO.CMS.HBG.Business.Forms.FormFields;
using Microsoft.AspNetCore.Mvc;

namespace FEO.CMS.HBG.Business.Forms
{
    /// <summary>
    /// HBGFormBlockController is a controller responsible for rendering a form block.
    /// It inherits from FormContainerBlockController to utilize the base functionality for handling form blocks.
    /// </summary>
    [TemplateDescriptor(AvailableWithoutTag = true,
                    Default = true,
                    ModelType = typeof(HBGFormContainerBlock),
                    TemplateTypeCategory = TemplateTypeCategories.MvcPartialController)]
    public class HBGFormBlockController : FormContainerBlockController
    {
        /// <summary>
        /// Invokes the component for rendering the form container block.
        /// This method overrides the base method to provide custom functionality for the retail form block.
        /// </summary>
        /// <param name="currentBlock">The current form container block being rendered.</param>
        /// <returns>An IViewComponentResult that renders the view for the current form block.</returns>
        protected override IViewComponentResult InvokeComponent(FormContainerBlock currentBlock)
        {
            return base.InvokeComponent(currentBlock);
        }
    }
}
