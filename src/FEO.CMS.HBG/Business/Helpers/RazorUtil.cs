using EPiServer.ServiceLocation;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using Microsoft.AspNetCore.WebUtilities;

namespace FEO.CMS.HBG.Business.Helpers
{
    public static class RazorUtil
    {
        public static string JoinCssClass(ContentArea styleConfigBlock)
        {
            if (styleConfigBlock != null && styleConfigBlock.Items != null && styleConfigBlock.Items.Any())
            {
                //Declare new list
                var styleNamesList = new List<HBGNameValuePairBlock>();
                var contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();

                //Add Content Area items to list
                foreach (var styles in styleConfigBlock.Items)
                {
                    var item = contentLoader.Get<HBGNameValuePairBlock>(styles.ContentLink);
                    styleNamesList.Add(item);
                }

                var cssClasses = styleConfigBlock == null || styleConfigBlock.Items == null ?
                    string.Empty : string.Join(" ", styleNamesList.Select(item => item.Value));

                return cssClasses;
            }
            return string.Empty;
        }
        public static string GetColumnClass(string columnSize)
        {
            var size = default(int);
            int.TryParse(columnSize, out size);
            if (size == 0)
                return string.Empty;

            var columnClass = string.Format("col-lg-{0}", size);
            var maxSize = 10;
            if (size == maxSize)
                return string.Format("{0} col-lg-offset-1", columnClass);

            var offsetSize = maxSize - size;
            var offsetClass = string.Format("col-lg-offset-{0}", offsetSize);

            return string.Format("{0} {1}", columnClass, offsetClass);
        }

        public static Dictionary<string, string> ParseQueryString(string queryString)
        {
            // Parse the query string using QueryHelpers
            var parsedQuery = QueryHelpers.ParseQuery(queryString);

            // Convert the parsed query to a Dictionary<string, string>
            var queryDictionary = new Dictionary<string, string>();

            foreach (var keyValuePair in parsedQuery)
            {
                // Since QueryHelpers.ParseQuery returns an IEnumerable of values for each key, 
                // we are assuming that each key has a single value.
                queryDictionary[keyValuePair.Key] = keyValuePair.Value.ToString();
            }

            return queryDictionary;
        }
    }
}
