using EPiServer.Find;
using EPiServer.Find.ClientConventions;
using EPiServer.Find.Cms;
using EPiServer.Find.Cms.Conventions;
using EPiServer.Framework;
using EPiServer.Framework.Initialization;
using EPiServer.ServiceLocation;
using FEO.CMS.HBG.Core.Blocks;

namespace FEO.CMS.HBG.Business.Initialization
{
    /// <summary>
    /// Initialization module for customizing the search client conventions to ensure the correct fields are indexed
    /// </summary>
    [InitializableModule]
    public class CustomSearchInitialization : IInitializableModule
    {
        public void Initialize(InitializationEngine context)
        {
            var client = context.Locate.Advanced.GetInstance<IClient>();
            IndexSpecifiedFields(ref client);
            //IndexSpecifiedTypes();
        }
        public void Uninitialize(InitializationEngine context) { }

        public void Preload(string[] parameters) { }

        private void IndexSpecifiedFields(ref IClient client)
        {

        }
        private void IndexSpecifiedTypes()
        {
            ContentIndexer.Instance.Conventions.ForInstancesOf<IContent>()
                .ShouldIndex(x => x is HBGBaseBlock);
        }

    }
}
