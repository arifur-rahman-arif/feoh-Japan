using EPiServer.ServiceLocation;

namespace FEO.CMS.HBG.Business.Dictionary
{
    public static class DictionaryHelper
    {
        public static string DictionaryEntry(string key, string fallback = "")
        {
            if (string.IsNullOrEmpty(key))
                return string.Empty;

            var _dictionaryService = ServiceLocator.Current.GetInstance<IDictionaryRepository>();

            var phrase = _dictionaryService?.GetPhrase(key)?.Trim();

            return !string.IsNullOrEmpty(phrase) ? phrase : fallback;
        }
    }
}
