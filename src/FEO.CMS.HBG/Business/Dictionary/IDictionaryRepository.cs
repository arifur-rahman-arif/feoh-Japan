using FEO.CMS.HBG.Core.Blocks.Bases;

namespace FEO.CMS.HBG.Business.Dictionary
{
    public interface IDictionaryRepository
    {
        string GetPhrase(string key);

        IEnumerable<HBGDictionaryEntryBlock> GetAll();
    }
}
