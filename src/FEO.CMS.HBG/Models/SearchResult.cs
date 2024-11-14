namespace FEO.CMS.HBG.Models
{
    public class SearchResult<T>
    {
        private List<T> results;

        // Total number of records in search
        public int TotalRecordsCount { get; set; }

        // Total count of matched results
        public int TotalCount { get; set; }

        // Holds the search result items
        public List<T> Results
        {
            get => this.results ??= new List<T>();
            set => this.results = value;
        }

        // Dictionary to hold faceting information
        public Dictionary<string, IEnumerable<string>> Facets { get; set; } = new Dictionary<string, IEnumerable<string>>();

        // Minimum price for filtering or display
        public double PriceMin { get; set; }

        // Maximum price for filtering or display
        public double PriceMax { get; set; }

        // Calculates paging details
        public Paging GetPaging(int pageNumber, int pageSize)
        {
            return new Paging(pageNumber, pageSize, TotalCount);
        }

        // Utility to check if the search result is empty
        public static bool IsEmpty(SearchResult<T> searchResult)
        {
            return searchResult == null || searchResult.Results == null || !searchResult.Results.Any();
        }
    }

    // Paging class to handle page-related data
    public class Paging
    {
        public int PageNumber { get; }
        public int PageSize { get; }
        public int TotalPages { get; }
        public int TotalItems { get; }

        public Paging(int pageNumber, int pageSize, int totalItems)
        {
            PageNumber = pageNumber;
            PageSize = pageSize;
            TotalItems = totalItems;
            TotalPages = (int)Math.Ceiling((double)totalItems / pageSize);
        }
    }
}
