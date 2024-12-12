using EPiServer.Logging;
using EPiServer.ServiceLocation;
using FEO.CMS.HBG.Core.Blocks.StayFarEast;
using FEO.CMS.HBG.Core.Constants;
using FEO.CMS.HBG.Core.Models;
using FEO.CMS.HBG.Helper;

namespace FEO.CMS.HBG.Core.Repositories
{
    public sealed class NavigationRepository
    {
        private static EPiServer.Logging.ILogger logger = LogManager.GetLogger(typeof(NavigationRepository));
        private static IContentLoader contentLoader = ServiceLocator.Current.GetInstance<IContentLoader>();
        public static HBGHeaderNavBlock GetHeaderNavigation()
        {
            try
            {
                var globalAssetsFolder = ContentReference.GlobalBlockFolder;
                var headerNavFolder = BlockHelper.GetDescendantPath(globalAssetsFolder, HBGPathConstants.StayFarEastNavigation + "/");

                if (headerNavFolder != null)
                {
                    var headerNav = contentLoader.GetChildren<IContent>(headerNavFolder)
                                                    .FirstOrDefault(block => block.Name.Equals(TemplateNames.HeaderNav, StringComparison.OrdinalIgnoreCase));
                    return headerNav as HBGHeaderNavBlock;
                }
            }
            catch (Exception ex)
            {
                logger.Error("GetHeaderNavigation() Error: " + ex.Message);
            }
            return null;
        }
    }
}
