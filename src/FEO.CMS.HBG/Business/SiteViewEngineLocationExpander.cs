using Microsoft.AspNetCore.Mvc.Razor;

namespace FEO.CMS.HBG.Business
{
    public class SiteViewEngineLocationExpander : IViewLocationExpander
    {
        private static readonly string[] AdditionalPartialViewFormats = new[]
        {
            TemplateCoordinator.BlockFolder + "{0}/Index.cshtml",
        };

        public IEnumerable<string> ExpandViewLocations(ViewLocationExpanderContext context, IEnumerable<string> viewLocations)
        {
            foreach (var location in viewLocations)
            {
                yield return location;
            }

            for (var i = 0; i < AdditionalPartialViewFormats.Length; i++)
            {
                yield return AdditionalPartialViewFormats[i];
            }
        }

        public void PopulateValues(ViewLocationExpanderContext context) { }
    }

}
