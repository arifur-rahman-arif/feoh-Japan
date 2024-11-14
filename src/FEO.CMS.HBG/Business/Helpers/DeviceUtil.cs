namespace FEO.CMS.HBG.Business.Helpers
{
    public static class DeviceUtil
    {
        private static HttpContext CurrentContext => new HttpContextAccessor().HttpContext;

        public static bool IsSmallDevice()
        {
            return IsTablet() || IsMobile() || IsEReader();
        }

        public static bool IsEReader()
        {
            string userAgent = CurrentContext.Request.Headers["User-Agent"].ToString();
            return userAgent.Contains("EReader", StringComparison.OrdinalIgnoreCase);
        }

        public static bool IsMobile()
        {
            string userAgent = CurrentContext.Request.Headers["User-Agent"].ToString();
            return userAgent.Contains("Mobi", StringComparison.OrdinalIgnoreCase) || userAgent.Contains("iPhone", StringComparison.OrdinalIgnoreCase);
        }

        public static bool IsTablet()
        {
            string userAgent = CurrentContext.Request.Headers["User-Agent"].ToString();
            return userAgent.Contains("Tablet", StringComparison.OrdinalIgnoreCase) || userAgent.Contains("iPad", StringComparison.OrdinalIgnoreCase);
        }
    }
}
