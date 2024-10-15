using EPiServer.Logging.Compatibility;

namespace FEO.CMS.HBG.Helper
{
    public static class Logger
    {
        private static ILog logger;

        static Logger()
        {
            logger = LogManager.GetLogger("FarEastRBGLog");
        }

        public static void Info(string message)
        {
            logger.Info(message);
        }

        public static void Warn(string message)
        {
            logger.Warn(message);
        }

        public static void Error(string message)
        {
            logger.Error(message);
        }

        public static void Debug(string message)
        {
            logger.Debug(message);
        }

        public static void Error(string v, string stackTrace)
        {
            throw new NotImplementedException();
        }
    }
}
