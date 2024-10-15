using System.Text.RegularExpressions;

namespace FEO.CMS.HBG.Business.ExtensionMethods
{
    /// <summary>
    /// Remove parent p tag from the html editor field when rendering in the view. Usage: @Html.Raw(Model.Address.RemoveParagraphWrapper())
    /// </summary>
    public static class XhtmlStringExtensions
    {
        public static XhtmlString RemoveParagraphWrapper(this XhtmlString xhtmlString)
        {
            if (xhtmlString == null)
                return null;

            var html = xhtmlString.ToHtmlString();

            try
            {
                // Regex pattern to match the first <p>...</p> without any attributes
                string pattern = @"^<p>(.*?)<\/p>$";
                var result = Regex.Replace(html, pattern, "$1", RegexOptions.Singleline | RegexOptions.IgnoreCase);

                return new XhtmlString(result);
            }
            catch (Exception)
            {
                // If something goes wrong, return the original input
                return xhtmlString;
            }
        }
    }
}