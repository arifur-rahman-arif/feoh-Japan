using EPiServer.Find;
using EPiServer.Find.Cms;
using EPiServer.Globalization;
using EPiServer.Logging;
using FEO.CMS.HBG.Core.Blocks.Bases;
using System.Text.RegularExpressions;

namespace FEO.CMS.HBG.Business.Dictionary
{
    public class DictionaryRepository : IDictionaryRepository
    {
        private readonly IClient _findClient;
        private readonly EPiServer.Logging.ILogger _logger = EPiServer.Logging.LogManager.GetLogger(typeof(DictionaryRepository));

        public DictionaryRepository(IClient findClient)
        {
            _findClient = findClient ?? throw new ArgumentNullException(nameof(findClient));
        }

        public string GetPhrase(string key)
        {
            try
            {
                var queryBuilder = this._findClient
                .Search<HBGDictionaryEntryBlock>().For(key).InField(x => x.Key)
                .ExcludeDeleted().InLanguageBranch(ContentLanguage.PreferredCulture.Name)
                .GetContentResult();

                var result = queryBuilder.Items.FirstOrDefault();

                return result != null ? result?.Phrase != null ? Regex.Replace(result?.Phrase?.ToString(), @"<\/?p>", string.Empty) : string.Empty : string.Empty;
            }
            catch (Exception ex)
            {
                _logger.Error($"method [DictionaryRepository GetPhrase] >> {ex.Message + ". " + ex.StackTrace}");
                return null;
            }
        }

        public IEnumerable<HBGDictionaryEntryBlock> GetAll()
        {
            var queryBuilder = this._findClient
                .Search<HBGDictionaryEntryBlock>()
                .ExcludeDeleted()
                .GetContentResult();

            var result = queryBuilder.Items;

            return result;
        }
    }
}
