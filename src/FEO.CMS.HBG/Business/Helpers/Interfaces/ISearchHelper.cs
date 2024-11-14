
using FEO.CMS.HBG.Models;

namespace FEO.CMS.HBG.Business.Helpers.Interfaces
{
    public interface ISearchHelper
    {
        SearchResult<BlogItemModel> SearchBlog(SearchParam searchParam);


    }
}
