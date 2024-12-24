using EPiServer.ServiceLocation;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace FEO.CMS.HBG.Helper
{
    public static class HtmlHelperExtensions
    {
        public static IHtmlContent GoogleCaptcha(this IHtmlHelper helper)
        {
            var GetAppSetting = ServiceLocator.Current.GetInstance<IConfiguration>();
            string publicSiteKey = GetAppSetting["RecaptchaKey:SiteKey"];

            // Create the div tag for Google reCAPTCHA
            var tagBuilder = new TagBuilder("div");
            tagBuilder.AddCssClass("g-recaptcha");
            tagBuilder.Attributes.Add("data-sitekey", publicSiteKey);

            using (var writer = new System.IO.StringWriter())
            {
                tagBuilder.WriteTo(writer, System.Text.Encodings.Web.HtmlEncoder.Default);
                string renderedCaptcha = writer.ToString();

                // Optionally, include the script for Google reCAPTCHA if needed
                // const string googleCaptchaScript = "<script>(function($){$(document).ready(function(){setTimeout(function() {$.getScript('https://www.google.com/recaptcha/api.js');}, 4000);});})(jQuery);</script>";

                return new HtmlString($"{renderedCaptcha}");
            }
        }
    }
}
