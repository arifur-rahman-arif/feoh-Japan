using EPiServer.Globalization;
using EPiServer.ServiceLocation;
using EPiServer.Web.Routing;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace FEO.CMS.HBG.Business.Helpers
{
    public static class HtmlExtensions
    {
        public static HtmlString GetMetaOgUrl(this IHtmlHelper helper)
        {
            return GetMetaOgUrl(helper, true);
        }
        public static HtmlString GetMetaOgUrl(this IHtmlHelper helper, bool embedLanguage)
        {
            var url = ServiceLocator.Current.GetInstance<IPageRouteHelper>().Page.LinkURL.ToLower();
            var linkBuilder = new TagBuilder("meta");
            linkBuilder.Attributes.Add("property", "og:url");
            linkBuilder.Attributes.Add("content", url);

            using (var writer = new StringWriter())
            {
                linkBuilder.TagRenderMode = TagRenderMode.SelfClosing;
                linkBuilder.WriteTo(writer, System.Text.Encodings.Web.HtmlEncoder.Default);
                return new HtmlString(writer.ToString());
            }
        }

        //public static HtmlString CanonicalLink(this IHtmlHelper helper)
        //{
        //    return CanonicalLink(helper, true);
        //}
        public static HtmlString CanonicalLink(this IHtmlHelper helper, bool embedLanguage)
        {
            var url = ServiceLocator.Current.GetInstance<IPageRouteHelper>().Page.LinkURL.ToLower();

            var linkBuilder = new TagBuilder("link");
            linkBuilder.Attributes.Add("rel", "canonical");
            linkBuilder.Attributes.Add("href", url);

            using (var writer = new StringWriter())
            {
                linkBuilder.TagRenderMode = TagRenderMode.SelfClosing;
                linkBuilder.WriteTo(writer, System.Text.Encodings.Web.HtmlEncoder.Default);
                return new HtmlString(writer.ToString());
            }
        }

        public static HtmlString HrefLangLink(this IHtmlHelper helper)
        {
            return HrefLangLink(helper, true);
        }
        public static HtmlString HrefLangLink(this IHtmlHelper helper, bool embedLanguage)
        {
            var url = ServiceLocator.Current.GetInstance<IPageRouteHelper>().Page.LinkURL.ToLower();
            var lang = ContentLanguage.PreferredCulture.Name;

            var linkBuilder = new TagBuilder("link");
            linkBuilder.Attributes.Add("rel", "alternate");
            linkBuilder.Attributes.Add("href", url);
            linkBuilder.Attributes.Add("hreflang", lang.ToLower());

            using (var writer = new StringWriter())
            {
                linkBuilder.TagRenderMode = TagRenderMode.SelfClosing;
                linkBuilder.WriteTo(writer, System.Text.Encodings.Web.HtmlEncoder.Default);
                return new HtmlString(writer.ToString());
            }
        }
        public static HtmlString BingLangMeta(this IHtmlHelper helper)
        {
            var lang = ContentLanguage.PreferredCulture.Name;

            var metaBuilder = new TagBuilder("meta");
            metaBuilder.Attributes.Add("http-equiv", "content-language");
            metaBuilder.Attributes.Add("content", lang.ToLower());

            using (var writer = new StringWriter())
            {
                metaBuilder.TagRenderMode = TagRenderMode.SelfClosing;
                metaBuilder.WriteTo(writer, System.Text.Encodings.Web.HtmlEncoder.Default);
                return new HtmlString(writer.ToString());
            }
        }
    }
}
