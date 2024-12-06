using EPiServer.Cms.Shell;
using EPiServer.Cms.TinyMce.Core;
using EPiServer.Cms.UI.AspNetIdentity;
using EPiServer.Forms.Internal.Security;
using EPiServer.OpenIDConnect;
using EPiServer.ServiceLocation;
using FEO.CMS.HBG.Business;
using FEO.CMS.HBG.Business.Dictionary;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor;

namespace FEO.CMS.HBG
{
    public static class HospitalityServiceExtensions
    {
        public static IServiceCollection AddBootstrapHospitalityServices(this IServiceCollection services)
        {
            services.Configure(delegate (RazorViewEngineOptions options)
            {
                options.ViewLocationExpanders.Add(new SiteViewEngineLocationExpander());
            });
            services.AddHttpContextOrThreadScoped<IDictionaryRepository>(x => x.GetInstance<DictionaryRepository>());
            services.AddControllers().AddJsonOptions(delegate (JsonOptions options)
            {
                options.JsonSerializerOptions.PropertyNamingPolicy = null;
            });
            return services;
        }
        public static IServiceCollection AddPostCmsHospitalityServices(this IServiceCollection services, IWebHostEnvironment _webHostingEnvironment, IConfiguration _configuration)
        {
            services.Configure<MvcOptions>(options => options.Filters.Add<PageContextActionFilter>());
            services.AddAdminUserRegistration()
                .AddEmbeddedLocalization<Startup>()
                .AddAuthorizationCore()
                .AddAuthorization();

            services.AddContentDeliveryApi(options => { options.SiteDefinitionApiEnabled = true; }).WithFriendlyUrl();

            services.AddContentManagementApi(OpenIDConnectOptionsDefaults.AuthenticationScheme, options =>
            {
                options.DisableScopeValidation = true;
            })
                .AddOpenIDConnect<ApplicationUser>(
                 useDevelopmentCertificate: true,
                 signingCertificate: null,
                 encryptionCertificate: null,
                 createSchema: true
             )
            .AddOpenIDConnectUI();
            services.AddContentDefinitionsApi(OpenIDConnectOptionsDefaults.AuthenticationScheme, options =>
            {
                options.DisableScopeValidation = true;
            });


            services.Configure<TinyMceConfiguration>(config =>
            {
                // Add the advanced list styles, table, and code plugins// and append buttons for inserting and editing tables// and showing source code to the toolbar
                config.Default()
                .AddPlugin("code")
                .Toolbar("formatselect styleselect | epi-link anchor | bold italic underline | superscript subscript | bullist numlist | image epi-image-editor",
                "table tabledelete tableprops tablerowprops tablecellprops tableinsertrowbefore tableinsertrowafter tabledeleterow tableinsertcolbefore tableinsertcolafter tabledeletecol",
                "epi-personalized-content | removeformat | undo redo searchreplace | fullscreen code help");
            });

            services.AddTransient<IAntiForgeryService, AntiForgeryService>();
            services.AddSingleton<IDictionaryRepository, DictionaryRepository>();
            return services;
        }
    }
}
