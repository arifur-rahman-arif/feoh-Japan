namespace FEO.CMS.HBG.Models
{
    public class SearchParam
    {
        private List<SearchFilter> attributes;
        private List<SearchFilter> filters;

        public string Keyword { get; set; }
        public bool Suggested { get; set; }
        public bool IsFacet { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public string PageID { get; set; }
        public string Type { get; set; }
        public bool AllowDefaultLanguage { get; set; }

        public List<SearchFilter> Filters
        {
            get
            {
                return this.filters ?? (this.filters = new List<SearchFilter>());
            }
            set
            {
                this.filters = value;
            }
        }

        public List<SearchFilter> Attributes
        {
            get
            {
                return this.attributes ?? (this.attributes = new List<SearchFilter>());
            }
            set
            {
                this.attributes = value;
            }
        }

        public string ParentItemId { get; set; }
        public string ItemId { get; set; }
        public bool IsGuid { get; set; }
        public string SelectedPropertyId { get; set; }
        public bool ClearFilterDealData { get; set; }
        public string DataType { get; set; }
        public string Language { get; set; }
        public string Currency { get; set; }
        public string SortBy { get; set; }
        public bool Recommend { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Arrive { get; set; }
        public string Depart { get; set; }
        public string Adult { get; set; }
        public string Child { get; set; }
        public string Room { get; set; }
        public List<string> HotelIds { get; set; }

        public bool IsRateRealTime
        {
            get
            {
                return (!string.IsNullOrEmpty(this.Country) || !string.IsNullOrEmpty(this.City)) &&
                       !string.IsNullOrEmpty(this.Arrive) &&
                       !string.IsNullOrEmpty(this.Depart) &&
                       !string.IsNullOrEmpty(this.Adult) &&
                       !string.IsNullOrEmpty(this.Child);
            }
        }
    }
}
