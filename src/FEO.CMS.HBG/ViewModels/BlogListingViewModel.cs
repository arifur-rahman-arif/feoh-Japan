using FEO.CMS.HBG.Core.Blocks.StayFarEast;

namespace FEO.CMS.HBG.ViewModels
{
    public class BlogListingViewModel
    {
        public virtual string ComponentTitle { get; set; }
        public virtual int PageSize { get; set; }
        public virtual int PageSizeForMobile { get; set; }

        public BlogFilterGroup Locations { get; set; }
        public BlogFilterGroup Purposes { get; set; }
        public BlogFilterGroup Types { get; set; }
        public BlogFilterGroup Seasons { get; set; }
        public BlogFilterGroup OrderBy { get; set; }

        public HBGStyleConfigBlock Config { get; set; }
    }
    public class BlogFilterOption
    {
        public string Name { get; set; }
        public string Value { get; set; }
    }
    public class BlogFilterGroup
    {
        public string Name { get; set; }
        public IEnumerable<BlogFilterOption> Options { get; set; }
    }
    public class PagingSearchResult
    {
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
        public int PageCount { get; set; }
        public int? PrevPageNumber { get; set; }
        public int? NextPageNumber { get; set; }
    }
}
