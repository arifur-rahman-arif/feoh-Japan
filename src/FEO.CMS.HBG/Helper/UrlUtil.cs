using EPiServer.ServiceLocation;
using EPiServer.Web.Routing;
using System.Text;

namespace FEO.CMS.HBG.Helper
{
    public class UrlUtil
    {
        /// <summary>
        /// Call to: DeviceItem.QueryString
        /// </summary>
        //public static string DeviceQuery(DeviceItem deviceItem)
        //{
        //    return deviceItem.QueryString;
        //}

        /// <summary>
        /// Call to: System.Web.HttpUtility.UrlEncode(url)
        /// </summary>
        public static string UrlEncode(string url)
        {
            return System.Web.HttpUtility.UrlEncode(url);
        }


        /// <summary>
        /// Call to: System.Web.HttpUtility.UrlDecode(url)
        /// </summary>
        public static string UrlDecode(string url)
        {
            return System.Web.HttpUtility.UrlDecode(url);
        }

        /// <summary>
        /// Call to: WebUtil.GetServerUrl(true)
        /// </summary>
        public static string GetRootUrl()
        {
            var urlResolver = ServiceLocator.Current.GetInstance<UrlResolver>();
            return urlResolver.GetUrl(ContentReference.RootPage);
        }

        public static string GetFullUrl(string relativeUrl)
        {
            return Combine(GetRootUrl(), relativeUrl);
        }

        public static string Combine(string basePath, string relativePath)
        {
            basePath = basePath.Replace("\\", "/");
            relativePath = relativePath.Replace("\\", "/");

            var strb = new StringBuilder(basePath);
            if (!basePath.EndsWith("/")) strb.Append("/");
            if (relativePath.StartsWith("/")) relativePath = relativePath.Remove(0, 1);
            strb.Append(relativePath);

            return strb.ToString();
        }
        public static string RemoveSpecialCharacters(string str)
        {
            string[] escapeCharacters = new string[] { ",", "/", "!", "@", "#", "$", "%", "^", "&", "*", "'", "’", "\"", ";", "(", ")", ":", "|", "[", "]", "+", "®" };
            string tmpStr = str;
            foreach (var s in escapeCharacters)
            {
                if (tmpStr.Contains(s))
                {
                    tmpStr = tmpStr.Replace(s, "");
                }
            }
            return tmpStr;
        }
    }
}
