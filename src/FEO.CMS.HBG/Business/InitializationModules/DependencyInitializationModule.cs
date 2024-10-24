using EPiServer.Framework;
using EPiServer.Framework.Initialization;
using EPiServer.ServiceLocation;
using FEO.CMS.HBG.ViewModels;

namespace FEO.CMS.HBG.Business.InitializationModules
{
    [InitializableModule]
    public class DependencyInitializationModule : IConfigurableModule
    {
        public void ConfigureContainer(ServiceConfigurationContext context)
        {
            var configuration = context.Services.BuildServiceProvider().GetRequiredService<IConfiguration>();

            // Configure MySettings
            context.Services.Configure<SessionSettings>(configuration.GetSection("SessionSettings"));
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
