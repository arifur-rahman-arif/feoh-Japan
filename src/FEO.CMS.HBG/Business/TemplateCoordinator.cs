using EPiServer.ServiceLocation;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace FEO.CMS.HBG.Business
{
    [ServiceConfiguration]
    public class TemplateCoordinator : IViewTemplateModelRegistrator
    {
        public const string BlockFolder = "~/Views/FarEastHospitality/Blocks/";    
        public static void OnTemplateResolved(object sender, TemplateResolverEventArgs args)
        {
            //Disable DefaultPageController for page types that shouldn't have any renderer as pages
            //if (args.ItemToRender is IContainerPage && args.SelectedTemplate != null && args.SelectedTemplate.TemplateType == typeof(DefaultPageController))
            //{
            //    args.SelectedTemplate = null;
            //}
        }

        /// <summary>
        /// Registers renderers/templates which are not automatically discovered, 
        /// i.e. partial views whose names does not match a content type's name.
        /// </summary>
        /// <remarks>
        /// Using only partial views instead of controllers for blocks and page partials
        /// has performance benefits as they will only require calls to RenderPartial instead of
        /// RenderAction for controllers.
        /// Registering partial views as templates this way also enables specifying tags and 
        /// that a template supports all types inheriting from the content type/model type.
        /// </remarks>
        public void Register(TemplateModelCollection viewTemplateModelRegistrator)
        {


            //viewTemplateModelRegistrator.Add(typeof(BannerBlock), new EPiServer.DataAbstraction.TemplateModel
            //{
            //    Name = "BannerBlock-Default",
            //    AvailableWithoutTag = true,
            //    TemplateTypeCategory  = EPiServer.Framework.Web.TemplateTypeCategories.MvcPartialView,
            //    Path = "~/Views/FarEastCorporate/Corporate/Blocks/BannerBlock.cshtml"
            //});
            //viewTemplateModelRegistrator.Add(typeof(Banner), new TemplateModel
            //{
            //    Path = BlockPath("Banner.cshtml")
            //});

            //viewTemplateModelRegistrator.Add(typeof(TeaserBlock), new TemplateModel
            //{
            //    Name = "TeaserBlockWide",
            //    Tags = new[] { Global.ContentAreaTags.TwoThirdsWidth, Global.ContentAreaTags.FullWidth },
            //    AvailableWithoutTag = false,
            //    Path = BlockPath("TeaserBlockWide.cshtml")
            //});

            //var partialControllers = typeof(SitePageData).GetCustomAttributes(true);

            //var types = GetMvcPartialControllerTypes();

            //foreach (var t in types)
            //{
            //    var pageType = t.BaseType.GenericTypeArguments.FirstOrDefault();
            //    viewTemplateModelRegistrator.Add(pageType, new TemplateModel
            //    {
            //        Name = pageType.Name,
            //        TemplateType = t,
            //        TemplateTypeCategory = EPiServer.Framework.Web.TemplateTypeCategories.MvcPartialController,
            //        Path = $"/Views/{pageType.Name}/Index.cshtml"
            //    });
            //}

            //viewTemplateModelRegistrator.Add(typeof(IContentData), new TemplateModel
            //{
            //    Name = "NoRendererMessage",
            //    Inherit = true,
            //    Tags = new[] { Global.ContentAreaTags.NoRenderer },
            //    AvailableWithoutTag = false,
            //    Path = BlockPath("NoRenderer.cshtml")
            //});
        }

        //private static IEnumerable<Type> GetMvcPartialControllerTypes()
        //{
        //    return System.Reflection.Assembly
        //        .GetExecutingAssembly()
        //        .GetTypes()
        //        .Where(t => t.GetCustomAttributes(typeof(MvcPartialControllerAttribute), true).Any() && IsSubclassOfRawGeneric(typeof(PageControllerBase<>), t));
        //}

        //// TODO this can be moved to extension class
        //static bool IsSubclassOfRawGeneric(Type generic, Type toCheck)
        //{
        //    if (generic.Equals(toCheck))
        //        return false;

        //    while (toCheck != null && toCheck != typeof(object))
        //    {
        //        var cur = toCheck.IsGenericType ? toCheck.GetGenericTypeDefinition() : toCheck;
        //        if (cur == toCheck)
        //        {
        //            return true;
        //        }
        //        //generic = generic.BaseType;
        //        toCheck = toCheck.BaseType;
        //    }
        //    return false;
        //}


        private static string BlockPath(string fileName)
        {
            return string.Format("{0}{1}", BlockFolder, fileName);
        }
    }
}
