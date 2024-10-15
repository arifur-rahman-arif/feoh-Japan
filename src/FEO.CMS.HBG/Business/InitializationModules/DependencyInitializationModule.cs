using EPiServer.Framework;
using EPiServer.Framework.Initialization;
using EPiServer.ServiceLocation;

namespace FEO.CMS.HBG.Business.InitializationModules
{
    [InitializableModule]
    public class DependencyInitializationModule : IConfigurableModule
    {
        public void ConfigureContainer(ServiceConfigurationContext context)
        {
            // Register the service in the DI container
        }

        public void Initialize(InitializationEngine context)
        {
            // Perform any additional initialization logic here if needed
        }

        public void Uninitialize(InitializationEngine context)
        {
            // Clean up resources here if needed
        }

        public void Preload(string[] parameters) { }
    }
}
