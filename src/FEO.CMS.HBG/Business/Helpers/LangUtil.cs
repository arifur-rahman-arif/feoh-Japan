using EPiServer.Globalization;
using EPiServer.ServiceLocation;
using EPiServer.Web;
using System.Globalization;

namespace FEO.CMS.HBG.Business.Helpers
{
    public static class LangUtil
    {       
        public static bool LanguageExistsInDatabase(string languageName)
        {
            if (string.IsNullOrWhiteSpace(languageName))
                return false;

            var contentRepository = ServiceLocator.Current.GetInstance<IContentRepository>();
            var languageBranchRepository = ServiceLocator.Current.GetInstance<ILanguageBranchRepository>();
            var languages = languageBranchRepository.ListAll();

            return languages != null && languages.Any(language =>
            {
                return !string.IsNullOrWhiteSpace(language.Name) &&
                    language.Name.Equals(languageName, StringComparison.InvariantCultureIgnoreCase);
            });
        }
        public static string ExtractLanguageFromUrl(string rawUrl)
        {
            if (string.IsNullOrWhiteSpace(rawUrl))
                return null;

            var urlParts = rawUrl.Split(new[] { '/' }, StringSplitOptions.RemoveEmptyEntries);
            if (urlParts == null || !urlParts.Any())
                return null;

            var languageName = urlParts[0];
            if (!LanguageExistsInDatabase(languageName))
                return null;

            return languageName;
        }
        public static bool HasLanguageInUrl(string rawUrl)
        {
            var languageName = ExtractLanguageFromUrl(rawUrl);
            return !string.IsNullOrWhiteSpace(languageName);
        }
        public static bool IsContextLanguageDefaultSiteLanguage()
        {
            return IsLanguageDefaultSiteLanguage(ServiceLocator.Current.GetInstance<IContentLanguageAccessor>().Language);
        }
        public static bool IsLanguageDefaultSiteLanguage(CultureInfo language)
        {
            var currentSite = SiteDefinition.Current;
            var siteLanguage = ContentLanguage.PreferredCulture.Name;
            //ToDo - Get Default site language
            //var siteLanguage = currentSite?.Language.ToString() ?? string.Empty;

            return language != null && !string.IsNullOrWhiteSpace(siteLanguage) &&
                language.Name.Equals(siteLanguage, StringComparison.InvariantCultureIgnoreCase);
        }
        public static string EmbedLanguageToUrl(string languageName, string filePath)
        {
            var urlWithLanguage = string.Format("/{0}", languageName);
            if (!string.IsNullOrWhiteSpace(filePath) && filePath.Length > 1)
            {
                if (!filePath.StartsWith("/"))
                    urlWithLanguage = string.Format("{0}/", urlWithLanguage);
                urlWithLanguage = string.Format("{0}{1}", urlWithLanguage, filePath);
            }
            return urlWithLanguage;
        }
        public static string GetContextLanguageName()
        {
            var language = ContentLanguage.PreferredCulture;
            if (language == null)
                return null;

            return language.Name;
        }
    }
}
