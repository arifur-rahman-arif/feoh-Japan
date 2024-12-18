namespace FEO.CMS.HBG.Helper
{
    public static class OptimizelyHelperExtension
    {
        //public static string AddBookingURL(IListingPreview listing, WebsiteConfig websiteConfig, SfeBookingConfig bookingConfig, string arrive = "", string depart = "")
        //{
        //    var inputParams = AddBookingURLParamsViewData(listing, websiteConfig, bookingConfig, arrive, depart);

        //    return listing.CreateBookingUrl(inputParams);
        //}
        //public static string AddBookingURLParamsViewData(IListingPreview listing, WebsiteConfig websiteConfig, SfeBookingConfig bookingConfig, string arrive = "", string depart = "")
        //{
        //    var bookingParams = listing.GetBookingParams();
        //    string inputParams = string.Empty;

        //    if (!string.IsNullOrEmpty(bookingParams))
        //    {
        //        DateTime arrivedate = DateTime.Now.AddDays(bookingConfig.NumberOfDaysInAdvance);
        //        DateTime departdate = arrivedate.AddDays(websiteConfig.LengthOfStayDefault);

        //        if (listing.Type == AppConfigs.ListingTypes.ServicedResidence)
        //        {
        //            int totalDays = listing.MinNights > 0 ? listing.MinNights : (websiteConfig.LengthOfStayDefault > 0 ? websiteConfig.LengthOfStayDefault : 1);
        //            arrivedate = DateTime.Now.AddDays(bookingConfig.NumberOfDaysInAdvance);
        //            departdate = arrivedate.AddDays(totalDays);
        //        }

        //        if (bookingParams.Contains("arrive"))
        //            inputParams = "arrive=" + (!string.IsNullOrEmpty(arrive) ? arrive : arrivedate.ToString("yyyy-MM-dd"));
        //        else if (bookingParams.Contains("arrivalDate"))
        //            inputParams = "arrivalDate=" + (!string.IsNullOrEmpty(arrive) ? arrive : arrivedate.ToString("yyyy-MM-dd"));

        //        if (bookingParams.Contains("depart"))
        //            inputParams = inputParams + "&depart=" + (!string.IsNullOrEmpty(depart) ? depart : departdate.ToString("yyyy-MM-dd"));
        //        else if (bookingParams.Contains("departureDate"))
        //            inputParams = inputParams + "&departureDate=" + (!string.IsNullOrEmpty(depart) ? depart : departdate.ToString("yyyy-MM-dd"));
        //    }

        //    return inputParams;
        //}
        //public static string CreateBookingUrl(this IListingBooking listing, params string[] extraParams)
        //{
        //    var bookingUrl = listing.GetBookingUrl();
        //    if (string.IsNullOrWhiteSpace(bookingUrl))
        //        return HomePath;

        //    var bookingUri = default(Uri);
        //    if (!Uri.TryCreate(bookingUrl, UriKind.RelativeOrAbsolute, out bookingUri))
        //        return HomePath;

        //    var queryString = bookingUri.Query;
        //    var queryDictionary = WebUtil.ParseQueryString(queryString);
        //    var bookingUrlWithoutQuery = bookingUri.GetLeftPart(UriPartial.Path);
        //    var bookingParams = listing.GetBookingParams();

        //    MergeBookingParams(queryDictionary, bookingParams);
        //    AddExtraParams(queryDictionary, extraParams);
        //    CleanDictionary(queryDictionary);

        //    var parameters = queryDictionary
        //        .Select(pair => new[] { pair.Key, pair.Value })
        //        .SelectMany(pair => pair)
        //        .ToArray();

        //    return WebUtil.AddQueryString(bookingUrlWithoutQuery, parameters);
        //}
    }
}
