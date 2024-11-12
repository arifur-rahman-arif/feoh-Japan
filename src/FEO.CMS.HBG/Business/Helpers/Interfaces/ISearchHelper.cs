
using FEO.CMS.HBG.Models;

namespace FEO.CMS.HBG.Business.Helpers.Interfaces
{
    public interface ISearchHelper
    {
        IEnumerable<BlogItemModel> SearchBlog( SearchParam searchParam);
       
    }
}
