using System.Globalization;

namespace FEO.CMS.HBG.Core.Helper
{
    public static class DateTimeExtensionHelper
    {
        public static DateTime ToStartOfDay(this DateTime dateTime)
        {
            DateTime startDay = new DateTime(dateTime.Year, dateTime.Month, dateTime.Day, 0, 0, 0);
            return startDay.ToUniversalTime();
        }

        public static DateTime ToEndOfDay(this DateTime dateTime)
        {
            DateTime endDay = new DateTime(dateTime.Year, dateTime.Month, dateTime.Day, 23, 59, 59);
            return endDay.ToUniversalTime();
        }

        public static string GetLocalizedLongDateWithFormat(DateTime dateTime, string culture)
        {
            if (dateTime == DateTime.MinValue)
                return string.Empty;

            if (string.IsNullOrEmpty(culture))
                culture = "en";

            if (culture.ToLower() == "zh-cn" || culture.ToLower() == "ja-jp")
            {
                var dt = Convert.ToDateTime(dateTime, CultureInfo.CreateSpecificCulture(culture));

                DateTimeFormatInfo info = new CultureInfo(culture).DateTimeFormat;
                return dt.ToString(info.LongDatePattern, new CultureInfo(culture));
            }

            return dateTime.ToString("dd MMMM yyyy");
        }
        public static double CalculateTwoDate(DateTime startDate, DateTime endDate)
        {
            if (startDate == DateTime.MinValue || endDate == DateTime.MinValue)
                return 0;

            TimeSpan ts = endDate - startDate;
            return ts.TotalDays;
        }

        public static TimeSpan GetTimeSpanTwoDate(DateTime startDate, DateTime endDate)
        {
            if (startDate == DateTime.MinValue || endDate == DateTime.MinValue)
                return new TimeSpan();

            TimeSpan ts = endDate - startDate;
            return ts;
        }
    }
}
